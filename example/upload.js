const e = window.getTavernRegexes,
    n = window.replaceTavernRegexes,
    o = window.toastr,
    t = "upload-regex-button";
let r = null;
const i = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";

function s(e) {
    const n = (e || "").toLowerCase();
    return n.startsWith("替换") ? 2 : n.startsWith("删除") ? 3 : n.startsWith("消除") ? 4 : 1
}
async function a(e) {
    const n = [],
        t = [];
    if (Array.from(e).some((e => e.name.toLowerCase().endsWith(".zip")))) try {
        await async function() {
            return "function" == typeof JSZip ? (console.log("JSZip 已加载。"), Promise.resolve()) : r ? (console.log("JSZip 正在加载中..."), r) : (console.log(`尝试从 CDN 加载 JSZip: ${i}`), o && "function" == typeof o.info && o.info("首次上传ZIP，正在尝试加载 JSZip 库...", "请稍候", {
                timeOut: 3e3
            }), r = new Promise(((e, n) => {
                const t = document.createElement("script");
                t.src = i, t.async = !0, t.onload = () => {
                    "function" == typeof JSZip ? (console.log("JSZip 从 CDN 加载成功。"), o && "function" == typeof o.success && o.success("JSZip 库加载成功！", "成功", {
                        timeOut: 2e3
                    }), e()) : (console.error("JSZip CDN 脚本已加载，但 JSZip 对象未定义。"), o && "function" == typeof o.error && o.error("JSZip 库加载异常。", "错误"), n(new Error("JSZip loaded but not defined.")))
                }, t.onerror = e => {
                    console.error("从 CDN 加载 JSZip 失败:", e), o && "function" == typeof o.error && o.error("JSZip 库加载失败，无法处理ZIP文件。请检查网络连接或浏览器控制台。", "错误"), r = null, n(e)
                }, document.head.appendChild(t)
            })), r)
        }()
    } catch (e) {
        console.error("JSZip 加载失败，部分ZIP文件可能无法处理。", e)
    }
    for (const r of Array.from(e)) {
        const e = r.name.toLowerCase();
        if (e.endsWith(".json")) try {
            const e = await r.text();
            n.push({
                originalFileName: r.name,
                content: e
            })
        } catch (e) {
            t.push(`读取JSON文件 ${r.name} 失败: ${e.message}`)
        } else if (e.endsWith(".zip")) {
            if ("function" != typeof JSZip) {
                const e = `JSZip 库未能加载或不可用，无法处理 ZIP 文件: ${r.name}。`;
                o && "function" == typeof o.error ? o.error(e.replace(/\n/g, "<br>")) : alert(e), console.error(e), t.push(`跳过ZIP ${r.name}: JSZip 未加载/不可用。`);
                continue
            }
            try {
                const e = new JSZip,
                    o = await e.loadAsync(r),
                    i = [];
                o.forEach(((e, o) => {
                    o.name.toLowerCase().endsWith(".json") && !o.dir && i.push(o.async("string").then((e => {
                        n.push({
                            originalFileName: o.name,
                            content: e,
                            sourceArchiveName: r.name
                        })
                    })).catch((e => {
                        t.push(`从ZIP ${r.name} 提取 ${o.name} 失败: ${e.message}`)
                    })))
                })), await Promise.all(i)
            } catch (e) {
                t.push(`处理 ZIP 文件 ${r.name} 失败: ${e.message}`)
            }
        } else t.push(`跳过不支持的文件类型: ${r.name}`)
    }
    return {
        jsonDataSources: n,
        processingErrors: t
    }
}
$((() => {
    const r = window.parent.document;
    console.log("上传正则扩展: 初始化中...");
    const i = $("#extensionsMenu", r);
    if (i.length)
        if (0 === $(`#${t}`, r).length) {
            const c = `\n                <div id="${t}" class="list-group-item flex-container flexGap5 interactable" title="上传正则JSON文件或包含JSON的ZIP包(可多选)" tabIndex="0">\n                    <i class="fa-solid fa-upload"></i>\n                    <span>上传正则</span>\n            </div>\n        `;
            try {
                i.append(c), console.log("上传正则扩展: 按钮已成功添加到扩展菜单。");
                $(`#${t}`, r).on("click", (() => {
                    if (console.log('"上传正则"按钮被点击。'), "function" != typeof e || "function" != typeof n) {
                        const e = "SillyTavern 正则管理功能不可用。";
                        return o && "function" == typeof o.error ? o.error(e) : alert(e), void console.error("getTavernRegexes or replaceTavernRegexes is not a function.")
                    }
                    "object" == typeof o && "function" == typeof o.error || console.warn("Toastr 通知系统不完全可用，某些消息将回退到使用 alert。");
                    const t = document.createElement("input");
                    t.type = "file", t.accept = ".json,.zip", t.multiple = !0, t.style.display = "none", t.onchange = async r => {
                        const i = r.target.files;
                        let c = t;
                        if (!i || 0 === i.length) return o && "function" == typeof o.warning ? o.warning("没有选择文件。") : alert("没有选择文件。"), void(c.parentNode && c.parentNode.removeChild(c));
                        const {
                            jsonDataSources: l,
                            processingErrors: p
                        } = await a(i);
                        if (c.parentNode && c.parentNode.removeChild(c), p.length > 0) {
                            const e = `在文件读取/ZIP提取阶段出现以下问题:\n${p.join("\n")}`;
                            o && "function" == typeof o.warning ? o.warning(e.replace(/\n/g, "<br>"), "文件处理问题", {
                                timeOut: 15e3,
                                extendedTimeOut: 7e3,
                                escapeHtml: !1
                            }) : alert(e), console.warn("文件处理问题:", p)
                        }
                        if (0 === l.length) {
                            const e = "未找到可供处理的 JSON 内容。";
                            return void(o && "function" == typeof o.info ? o.info(e) : alert(e))
                        }
                        let m = null;
                        if (window.confirm(`要将提取到的 ${l.length} 个正则条目全部上传为【全局】正则吗？\n(点击"取消"将询问是否设为【局部】正则)`) ? m = "global" : window.confirm(`要将提取到的 ${l.length} 个正则条目全部上传为【局部】正则 (当前角色) 吗？`) && (m = "character"), !m) return void(o && "function" == typeof o.info ? o.info("批量上传已取消：未选择作用域。") : alert("批量上传已取消：未选择作用域。"));
                        console.log(`批量上传作用域选定为: ${m}`);
                        const {
                            tavernRegexObjects: u,
                            parsingErrors: f
                        } = function(e, n) {
                            const o = [],
                                t = [];
                            return e.forEach((e => {
                                try {
                                    const r = JSON.parse(e.content);
                                    if (!r.scriptName || !r.findRegex) return void t.push(`${e.originalFileName}${e.sourceArchiveName ? ` (来自ZIP: ${e.sourceArchiveName})` : ""}: 文件格式无效 (缺少 scriptName 或 findRegex)。`);
                                    const i = {
                                            user_input: !1,
                                            ai_output: !1,
                                            slash_command: !1,
                                            world_info: !1
                                        },
                                        s = Array.isArray(r.placement) ? r.placement : [];
                                    s.includes(1) && (i.user_input = !0), s.includes(2) && (i.ai_output = !0), s.includes(3) && (i.slash_command = !0), s.includes(5) && (i.world_info = !0);
                                    const a = {
                                        display: "boolean" == typeof r.markdownOnly && r.markdownOnly,
                                        prompt: "boolean" == typeof r.promptOnly && r.promptOnly
                                    };
                                    o.push({
                                        id: r.id || window.crypto.randomUUID(),
                                        script_name: r.scriptName,
                                        find_regex: r.findRegex,
                                        replace_string: r.replaceString || "",
                                        enabled: "boolean" != typeof r.disabled || !1 === r.disabled,
                                        run_on_edit: "boolean" == typeof r.runOnEdit && r.runOnEdit,
                                        scope: n,
                                        source: i,
                                        destination: a,
                                        min_depth: void 0 === r.minDepth || null === r.minDepth ? null : Number(r.minDepth),
                                        max_depth: void 0 === r.maxDepth || null === r.maxDepth ? null : Number(r.maxDepth),
                                        _sourceFile: e.originalFileName,
                                        _sourceArchive: e.sourceArchiveName
                                    })
                                } catch (n) {
                                    t.push(`${e.originalFileName}${e.sourceArchiveName ? ` (来自ZIP: ${e.sourceArchiveName})` : ""}: 解析JSON失败 (${n.message})。`)
                                }
                            })), o.sort(((e, n) => {
                                const o = s(e.script_name),
                                    t = s(n.script_name);
                                if (o !== t) return o - t;
                                const r = e.script_name || "",
                                    i = n.script_name || "";
                                return r.localeCompare(i)
                            })), {
                                tavernRegexObjects: o,
                                parsingErrors: t
                            }
                        }(l, m);
                        if (f.length > 0) {
                            const e = `在JSON内容解析/验证阶段出现以下问题:\n${f.join("\n")}`;
                            o && "function" == typeof o.warning ? o.warning(e.replace(/\n/g, "<br>"), "JSON 处理警告", {
                                timeOut: 15e3,
                                extendedTimeOut: 7e3,
                                escapeHtml: !1
                            }) : alert(e), console.warn("JSON 内容解析/验证问题:", f)
                        }
                        if (0 !== u.length) try {
                            await async function(t) {
                                try {
                                    void 0 !== o && o.info("正在检查正则冲突...", "处理中");
                                    const r = await e({
                                            scope: "all"
                                        }),
                                        i = [],
                                        a = [];
                                    t.forEach((e => {
                                        r.some((n => n.id === e.id || n.script_name === e.script_name)) ? i.push(e.script_name) : a.push(e)
                                    }));
                                    let c = t;
                                    if (i.length > 0 && !confirm(`检测到 ${i.length} 个冲突项：\n${i.join("\n")}\n\n是否覆盖现有正则？`) && (c = a, 0 === c.length)) return void(void 0 !== o ? o.warning("没有新正则需要添加。", "已取消") : alert("没有新正则需要添加。"));
                                    void 0 !== o && o.info(`正在导入 ${c.length} 个正则...`, "处理中");
                                    let l = await e({
                                        scope: "all"
                                    });
                                    i.length > 0 && (l = l.filter((e => !c.some((n => e.id === n.id || e.script_name === n.script_name)))));
                                    const p = [...l, ...c];
                                    await n(p, {
                                        scope: "all"
                                    });
                                    const m = `成功导入 ${c.length} 个正则！${i.length > 0 ? `\n覆盖了 ${i.length} 个冲突项。` : ""}`;
                                    void 0 !== o ? o.success(m, "导入完成") : alert(m);
                                    const u = confirm("是否为本次上传的正则添加前缀？\n（例如：角色名、场景名等标识）");
                                    if (u) {
                                        const t = prompt("请输入要添加的前缀：\n（将添加到正则名称前面，格式：前缀-原名称）", "");
                                        if (t && t.trim()) {
                                            const r = t.trim();
                                            void 0 !== o && o.info(`正在为 ${c.length} 个正则添加前缀 "${r}"...`, "处理中");
                                            const i = (await e({
                                                scope: "all"
                                            })).map((e => c.some((n => e.id === n.id || e.script_name === n.script_name)) ? {
                                                ...e,
                                                script_name: `${r}-${e.script_name}`
                                            } : e));
                                            await n(i, {
                                                scope: "all"
                                            }), void 0 !== o && o.success(`前缀 "${r}" 添加完成！`, "处理完成")
                                        } else u && void 0 !== o && o.warning("前缀为空，跳过添加前缀。", "已跳过")
                                    }
                                    if (confirm("是否对所有正则进行重新排序？\n（新导入的正则将按优先级排序）")) {
                                        void 0 !== o && o.info("正在重新排序所有正则...", "处理中");
                                        const t = await e({ scope: "all" }),
                                            r = t.sort(((e, n) => {
                                                const o = s(e.script_name),
                                                    t = s(n.script_name);
                                                return o !== t ? o - t : (e.script_name || "").localeCompare(n.script_name || "")
                                            }));
                                        await n(r, {
                                            scope: "all"
                                        }), void 0 !== o && o.success("正则排序完成！", "处理完成")
                                    }
                                } catch (e) {
                                    const n = `处理正则时出错: ${e.message}`;
                                    console.error("processAndMergeRegexes error:", e), void 0 !== o ? o.error(n, "错误") : alert(n)
                                }
                            }(u)
                        } catch (e) {
                            const n = `处理或保存正则时发生严重错误: ${e.message}`;
                            o && "function" == typeof o.error ? o.error(n) : alert(n), console.error("批量上传正则处理/保存错误:", e)
                        } else {
                            const e = "没有有效的正则数据可供上传。";
                            o && "function" == typeof o.info ? o.info(e) : alert(e)
                        }
                    }, document.body.appendChild(t), t.click()
                }))
            } catch (e) {
                console.error("上传正则扩展: 添加按钮到扩展菜单失败。", e)
            }
        } else console.log("上传正则扩展: 按钮已经存在，无需重复添加。");
    else console.warn("上传正则扩展: 未找到扩展菜单 (#extensionsMenu)。按钮无法添加。");
    console.log("上传正则扩展: 初始化完成。")
}));
