/**
 * 开发模式日志函数
 * 只有在开发模式开启时才会输出日志
 * @param {...any} args - 日志参数
 */
function devLog(...args) {
  // 此处留空，所有对devLog的调用都将变成无害的空操作。
}

const config_CONFIG = {
  STORAGE_KEY_BASE: "scriptGroupingEnabled",
  getStorageKey: function (areaKey) {
    return `${this.STORAGE_KEY_BASE}_${areaKey}`;
  },
  GROUP_PREFIX_REGEX: /^(?:【([^】]+)】|\[([^\]]+)\]|([^-\s]+)-)\s*(.+)$/,
  AREAS: {
    "global-regex": {
      titleSelector: "#global_scripts_block > div:first-child",
      listSelector: "#saved_regex_scripts",
      itemSelector: ".regex-script-label",
      nameSelector: ".regex_script_name",
      dragHandleSelector: ".drag-handle",
      sortableId: "#saved_regex_scripts",
      isRegexType: !0,
    },
    "scoped-regex": {
      titleSelector:
        "#scoped_scripts_block .flex-container.alignItemsBaseline strong",
      listSelector: "#saved_scoped_scripts",
      itemSelector: ".regex-script-label",
      nameSelector: ".regex_script_name",
      dragHandleSelector: ".drag-handle",
      sortableId: "#saved_scoped_scripts",
      isRegexType: !0,
    },
    "global-script": {
      titleSelector: '.settings-title-text:contains("全局脚本库")',
      listSelector: "#global-script-list",
      itemSelector: ".script-item",
      nameSelector: ".script-name",
      dragHandleSelector: ".drag-handle",
      sortableId: "#global-script-list",
      isRegexType: !1,
    },
    "scoped-script": {
      titleSelector: '.settings-title-text:contains("局部脚本库")',
      listSelector: "#scoped-script-list",
      itemSelector: ".script-item",
      nameSelector: ".script-name",
      dragHandleSelector: ".drag-handle",
      sortableId: "#scoped-script-list",
      isRegexType: !1,
    },
  },
  STYLES: {
    groupHeaderStyle:
      "\n            padding: 4px 10px;\n            background: var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.2));\n            border-radius: 4px;\n            margin: 4px 0;\n            cursor: pointer;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-weight: bold;\n            border-left: 2px solid var(--SmartThemeUnderlineColor, rgba(52, 152, 219, 0.4));\n            width: 100%;\n        ",
    groupContentStyle:
      "\n            padding-left: 6px;\n            border-left: 1px dashed var(--SmartThemeEmColor, rgba(204, 204, 204, 0.4));\n            margin-left: 12px;\n            width: 100%;\n        ",
    iconStyle:
      "\n            cursor: pointer;\n            margin-left: 8px;\n            font-size: 0.9em;\n            color: var(--SmartThemeBodyColor, inherit);\n        ",
    toggleAllButtonStyle:
      "\n            font-size: 0.9em;\n            cursor: pointer;\n            margin-left: 5px;\n            color: var(--SmartThemeBodyColor, inherit);\n        ",
    // 新增：模态窗口样式（完全重构，确保完美居中）
    modalOverlayStyle:
      "\n            position: fixed !important;\n            top: 0 !important;\n            left: 0 !important;\n            width: 100vw !important;\n            height: 100vh !important;\n            background: rgba(0, 0, 0, 0.6);\n            z-index: 99999 !important;\n            display: flex !important;\n            justify-content: center !important;\n            align-items: center !important;\n            padding: clamp(8px, 2vw, 20px) !important;\n            box-sizing: border-box !important;\n            overflow: hidden !important;\n        ",
    modalContentStyle:
      "\n            background: var(--SmartThemeBlurTintColor, #1a1a1a);\n            border: 1px solid var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.3));\n            border-radius: clamp(6px, 1vw, 12px);\n            width: 100%;\n            max-width: min(600px, 95vw);\n            max-height: min(90vh, calc(100vh - 20px));\n            min-height: min(300px, 80vh);\n            display: flex;\n            flex-direction: column;\n            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n            margin: 0 !important;\n            position: relative;\n            overflow: hidden;\n            transform: translateZ(0);\n        ",
    modalHeaderStyle:
      "\n            padding: clamp(12px, 3vw, 16px);\n            border-bottom: 1px solid var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.2));\n            font-weight: bold;\n            font-size: clamp(1em, 4vw, 1.2em);\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            flex-shrink: 0;\n            word-break: break-word;\n            background: var(--SmartThemeBlurTintColor, rgba(30, 30, 30, 0.9));\n        ",
    modalBodyStyle:
      "\n            padding: clamp(12px, 3vw, 20px);\n            overflow-y: auto;\n            overflow-x: hidden;\n            flex: 1;\n            min-height: 0;\n            -webkit-overflow-scrolling: touch;\n            scroll-behavior: smooth;\n        ",
    modalFooterStyle:
      "\n            padding: clamp(12px, 3vw, 16px);\n            border-top: 1px solid var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.2));\n            display: flex;\n            justify-content: flex-end;\n            gap: clamp(6px, 2vw, 12px);\n            flex-shrink: 0;\n            flex-wrap: wrap;\n            background: var(--SmartThemeBlurTintColor, rgba(30, 30, 30, 0.9));\n        ",
    regexItemStyle:
      "\n            display: flex;\n            align-items: flex-start;\n            padding: 12px;\n            margin: 6px 0;\n            background: var(--SmartThemeBlurTintColor, rgba(40, 40, 40, 0.8));\n            border: 1px solid var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.1));\n            border-radius: 4px;\n            transition: background-color 0.2s;\n            min-height: 44px;\n        ",
    regexItemHoverStyle:
      "\n            background: var(--SmartThemeBorderColor, rgba(60, 60, 60, 0.8));\n        ",
    buttonStyle:
      "\n            padding: clamp(10px, 3vw, 16px);\n            border: 1px solid var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.3));\n            border-radius: clamp(4px, 1vw, 8px);\n            cursor: pointer;\n            font-size: clamp(14px, 3.5vw, 16px);\n            transition: all 0.2s ease;\n            min-height: clamp(44px, 8vw, 48px);\n            min-width: clamp(60px, 15vw, 80px);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            white-space: nowrap;\n            line-height: 1.2;\n            font-weight: 500;\n        ",
    primaryButtonStyle:
      "\n            background: var(--SmartThemeUnderlineColor, rgba(52, 152, 219, 0.6));\n            color: white;\n        ",
    secondaryButtonStyle:
      "\n            background: transparent;\n            color: var(--SmartThemeBodyColor, inherit);\n        ",
  },
};
function groupScripts($items, nameSelector, isRegexType) {
  const groups = [];
  let currentGroup = null,
    currentGroupItems = [];
  if (!$items || 0 === $items.length)
    return console.error("没有提供有效的条目列表进行分组"), groups;
  $items.each(function (index) {
    const $item = $(this),
      scriptName = (function extractScriptName(
        $item,
        nameSelector,
        isRegexType
      ) {
        try {
          let $nameElement = $item.find(nameSelector);
          if (0 === $nameElement.length)
            if (isRegexType) {
              const regexSelectors = [
                ".regex_script_name",
                ".name",
                "div.flexGrow",
                "div:first",
              ];
              for (const selector of regexSelectors)
                if (
                  (($nameElement = $item.find(selector)),
                    $nameElement.length > 0)
                )
                  break;
            } else {
              const scriptSelectors = [
                ".script-name",
                ".name",
                ".script-title",
                "div:first",
              ];
              for (const selector of scriptSelectors)
                if (
                  (($nameElement = $item.find(selector)),
                    $nameElement.length > 0)
                )
                  break;
            }
          if ($nameElement.length > 0) return $nameElement.text().trim();
        } catch (e) {
          console.error("提取脚本名称出错:", e);
        }
        return null;
      })($item, nameSelector, isRegexType);
    if (!scriptName)
      return (
        console.warn(`项目 #${index} 无法提取名称，跳过分组`),
        null !== currentGroup &&
        currentGroupItems.length > 0 &&
        (groups.push({
          name: currentGroup,
          items: currentGroupItems.slice(),
        }),
          (currentGroupItems = [])),
        groups.push({ name: null, items: [$item] }),
        (currentGroup = null),
        !0
      );
    const groupName = (function detectGroup(scriptName) {
      if (!scriptName || "string" != typeof scriptName) return null;
      const match = scriptName.match(config_CONFIG.GROUP_PREFIX_REGEX);

      if (match) {
        // 按优先级返回匹配的分组名
        const extractedGroupName = match[1] || match[2] || match[3];
        if (extractedGroupName && extractedGroupName.trim()) {
          return extractedGroupName.trim();
        }
      }

      // 没有匹配到分组模式时返回 null
      return null;
    })(scriptName);
    null === groupName
      ? null === currentGroup
        ? currentGroupItems.push($item)
        : (groups.push({
          name: currentGroup,
          items: currentGroupItems.slice(),
        }),
          (currentGroup = null),
          (currentGroupItems = [$item]))
      : currentGroup === groupName
        ? currentGroupItems.push($item)
        : (currentGroupItems.length > 0 &&
          groups.push({ name: currentGroup, items: currentGroupItems.slice() }),
          (currentGroup = groupName),
          (currentGroupItems = [$item]));
  }),
    currentGroupItems.length > 0 &&
    groups.push({ name: currentGroup, items: currentGroupItems.slice() });
  let groupedItems = 0;
  return (
    groups.forEach((group) => {
      null !== group.name ? 0 : 0, (groupedItems += group.items.length);
    }),
    groupedItems !== $items.length &&
    console.warn(
      `警告：处理的项目数 (${groupedItems}) 与原始项目数 (${$items.length}) 不一致！`
    ),
    groups
  );
}
let isDebouncing = !1,
  operationStartTime = 0,
  debouncedButtons = [];
const operationQueue = [];
async function debounceUI(callback, options = {}) {
  const { minDelay = 100, operationName = "操作" } =
    "number" == typeof options ? { minDelay: options } : options;
  if (isDebouncing) return null;
  try {
    (isDebouncing = !0),
      (operationStartTime = performance.now()),
      (function dimAllButtons() {
        (debouncedButtons = []),
          $(
            'i[id$="-filter-icon"], i[id$="-group-icon"], i[id$="-toggle-all"], i[id$="-refresh-icon"], .group-toggle-icon'
          ).each(function () {
            const $button = $(this),
              buttonInfo = {
                $button,
                originalOpacity: "1",
                originalPointerEvents: "auto",
              };
            $button.css({
              opacity: "0.3",
              "pointer-events": "none",
              transition: "opacity 0.05s",
            }),
              debouncedButtons.push(buttonInfo);
          });
      })();
    const result = await callback(),
      operationDuration = performance.now() - operationStartTime,
      cooldownTime = Math.max(
        (function calculateCooldownTime(operationDuration) {
          return 100 + Math.min(0.5 * operationDuration, 1e3);
        })(operationDuration),
        minDelay
      );
    return (
      await new Promise((resolve) => setTimeout(resolve, cooldownTime)), result
    );
  } catch (error) {
    return console.error(`[FilterGroup]${operationName}执行出错:`, error), null;
  } finally {
    !(function restoreAllButtons() {
      if (!debouncedButtons || 0 === debouncedButtons.length)
        return (
          console.debug("[FilterGroup]没有需要恢复的按钮"),
          void (debouncedButtons = [])
        );
      debouncedButtons.forEach((buttonInfo, index) => {
        try {
          if (
            !buttonInfo ||
            !buttonInfo.$button ||
            0 === buttonInfo.$button.length
          )
            return void console.warn(`[FilterGroup]按钮对象无效 [${index}]`);
          buttonInfo.$button.css({
            opacity: buttonInfo.originalOpacity || "1",
            "pointer-events": buttonInfo.originalPointerEvents || "auto",
            transition: "opacity 0.05s",
          });
        } catch (error) {
          console.error(`[FilterGroup]恢复按钮[${index}]状态出错:`, error);
        }
      }),
        debouncedButtons.length,
        (debouncedButtons = []);
    })(),
      (isDebouncing = !1),
      operationQueue.length > 0 && setTimeout(processNextOperation, 100);
  }
}
function processNextOperation() {
  if (0 === operationQueue.length || isDebouncing) return;
  const nextOperation = operationQueue.shift();
  nextOperation
    .callback()
    .then((result) => {
      operationQueue.length > 0 && setTimeout(processNextOperation, 100);
    })
    .catch((error) => {
      console.error(
        `[FilterGroup]队列操作 ${nextOperation.name} 执行出错:`,
        error
      ),
        operationQueue.length > 0 && setTimeout(processNextOperation, 100);
    });
}
function isUIDebouncing() {
  return isDebouncing;
}
function addDebouncedClickHandler(selector, callback, options = {}) {
  const {
    stopPropagation = true,
    minDelay = 100,
    operationName = null,
  } = options;

  const handlerId = `handler_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  try {
    const $elements = typeof selector === 'string' ? $(selector) : selector;

    if ($elements.length === 0) {
      console.warn(`[FilterGroup] [${handlerId}] 未找到匹配选择器的元素: ${selector}`);
      return;
    }

    devLog(`[FilterGroup] [${handlerId}] 为 ${$elements.length} 个元素绑定点击事件处理器`);

    // 使用事件委托确保动态添加的元素也能响应事件
    const eventNamespace = `click.filtergroup.${handlerId}`;

    $elements
      .off(eventNamespace) // 先移除可能存在的旧事件处理器
      .on(eventNamespace, async function (e) {
        const eventId = `event_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

        try {
          if (stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
          }

          if (isUIDebouncing()) {
            devLog(`[FilterGroup] [${eventId}] UI正在防抖中，忽略此次点击事件`);
            return;
          }

          const $this = $(this);
          const buttonText = $this.attr('title') || $this.text() || $this.attr('class') || '未知按钮';
          const opName = operationName || buttonText;

          devLog(`[FilterGroup] [${eventId}] 开始处理点击事件: ${opName}`);
          devLog(`[FilterGroup] [${eventId}] 目标元素:`, $this[0]);

          try {
            const result = await debounceUI(async () => {
              devLog(`[FilterGroup] [${eventId}] 执行回调函数...`);
              const callbackResult = await callback.call(this, e, $this);
              devLog(`[FilterGroup] [${eventId}] 回调函数执行完成，结果:`, callbackResult);
              return callbackResult;
            }, {
              minDelay,
              operationName: opName,
            });

            devLog(`[FilterGroup] [${eventId}] 事件处理完成，结果:`, result);

          } catch (callbackError) {
            console.error(`[FilterGroup] [${eventId}] 回调函数执行失败:`, callbackError);
            throw callbackError;
          }

        } catch (error) {
          console.error(`[FilterGroup] [${eventId}] 事件处理器执行出错 (${opName}):`, error);

          // 提供用户友好的错误提示
          if (window.alert && opName && !opName.includes('未知')) {
            window.alert(`操作"${opName}"执行失败: ${error.message}\n\n请刷新页面后重试。`);
          }
        }
      });

    devLog(`[FilterGroup] [${handlerId}] 事件处理器绑定完成`);

  } catch (error) {
    console.error(`[FilterGroup] [${handlerId}] 添加点击事件处理器出错:`, error);
  }
}
function addFilterIcon(
  $titleElem,
  areaKey,
  getFilterState,
  updateFilterIcon,
  applyUIState,
  capitalizeFirstLetter
) {
  const filterIconId = `${areaKey}-filter-icon`;
  0 === $(`#${filterIconId}`).length &&
    ($titleElem.append(
      `<i id="${filterIconId}" class="fa-solid fa-filter" style="${config_CONFIG.STYLES.iconStyle}"></i>`
    ),
      addDebouncedClickHandler(
        `#${filterIconId}`,
        function (e) {
          const newState = (getFilterState(areaKey) + 1) % 3;
          return (
            localStorage.setItem(
              `regexFilter${capitalizeFirstLetter(areaKey)}`,
              newState
            ),
            updateFilterIcon(areaKey),
            applyUIState(areaKey)
          );
        },
        { operationName: `筛选切换(${areaKey})` }
      ),
      updateFilterIcon(areaKey));
}
function addGroupIcons(
  $titleElem,
  areaKey,
  getGroupingEnabledState,
  updateGroupIcon,
  applyUIState
) {
  const groupIconId = `${areaKey}-group-icon`;
  if (0 === $(`#${groupIconId}`).length) {
    const isGroupEnabled = getGroupingEnabledState(areaKey);
    $titleElem.append(
      `<i id="${groupIconId}" class="fa-solid ${isGroupEnabled ? "fa-folder-open" : "fa-folder"
      }" style="${config_CONFIG.STYLES.iconStyle}" title="${isGroupEnabled ? "关闭分组" : "开启分组"
      }"></i>`
    ),
      (function addToggleAllIcon($titleElem, areaKey, isGroupEnabled) {
        const toggleAllId = `${areaKey}-toggle-all`;
        0 === $(`#${toggleAllId}`).length &&
          ($titleElem.append(
            `<i id="${toggleAllId}" class="fa-solid fa-angle-down" style="${config_CONFIG.STYLES.toggleAllButtonStyle}" title="一键展开/折叠分组"></i>`
          ),
            isGroupEnabled
              ? $(`#${toggleAllId}`).css("display", "")
              : $(`#${toggleAllId}`).css("display", "none"),
            (function bindToggleAllEvent(toggleAllId, areaKey) {
              addDebouncedClickHandler(
                `#${toggleAllId}`,
                function (e, $this) {
                  const isExpand = $this.hasClass("fa-angle-down");
                  return (
                    $this.attr(
                      "class",
                      "fa-solid " + (isExpand ? "fa-angle-up" : "fa-angle-down")
                    ),
                    $this.attr(
                      "title",
                      isExpand ? "一键折叠分组" : "一键展开分组"
                    ),
                    (function toggleAllGroups(areaKey, isExpand) {
                      const $area = $(config_CONFIG.AREAS[areaKey].listSelector);
                      $area.find(".script-group-header").each(function () {
                        const $header = $(this),
                          $groupContent = $header.next(".script-group-content"),
                          $icon = $header.find(".group-toggle-icon");
                        isExpand
                          ? ($groupContent.show(),
                            $icon.attr(
                              "class",
                              "fa-solid fa-angle-up group-toggle-icon"
                            ))
                          : ($groupContent.hide(),
                            $icon.attr(
                              "class",
                              "fa-solid fa-angle-down group-toggle-icon"
                            ));
                      }),
                        (function saveAllGroupFoldStates(areaKey, allFolded) {
                          const $area = $(
                            config_CONFIG.AREAS[areaKey].listSelector
                          ),
                            foldStates = {};
                          $area.find(".script-group-header").each(function () {
                            const groupName = $(this)
                              .find("span")
                              .text()
                              .split(" (")[0];
                            foldStates[groupName] = allFolded;
                          });
                          const storageKey = `script_group_fold_state_${areaKey}`;
                          localStorage.setItem(
                            storageKey,
                            JSON.stringify(foldStates)
                          );
                        })(areaKey, !isExpand);
                    })(areaKey, isExpand)
                  );
                },
                { operationName: `一键展开/折叠分组(${areaKey})` }
              );
            })(toggleAllId, areaKey));
      })($titleElem, areaKey, isGroupEnabled),
      addDebouncedClickHandler(
        `#${groupIconId}`,
        function (e) {
          const newState = !getGroupingEnabledState(areaKey);
          return (
            localStorage.setItem(
              config_CONFIG.getStorageKey(areaKey),
              newState
            ),
            updateGroupIcon(areaKey),
            applyUIState(areaKey)
          );
        },
        { operationName: `分组切换(${areaKey})` }
      ),
      updateGroupIcon(areaKey);
  }
}
function addRefreshIcon($titleElem, areaKey, applyAllUIStates) {
  const refreshIconId = `${areaKey}-refresh-icon`;
  0 === $(`#${refreshIconId}`).length &&
    ($titleElem.append(
      `<i id="${refreshIconId}" class="fa-solid fa-rotate" style="${config_CONFIG.STYLES.iconStyle}" title="刷新"></i>`
    ),
      addDebouncedClickHandler(
        `#${refreshIconId}`,
        function () {
          return applyAllUIStates();
        },
        { operationName: `刷新UI(${areaKey})` }
      ));
}

// 新增：为局部正则脚本添加"全部移至全局"按钮
function addMoveToGlobalIcon($titleElem, areaKey, applyAllUIStates) {
  // 只在局部正则脚本区域添加此按钮
  if (areaKey !== "scoped-regex") return;

  devLog(`[FilterGroup] 尝试为局部正则脚本区域添加移动按钮...`);
  devLog(`[FilterGroup] 标题元素:`, $titleElem);
  devLog(`[FilterGroup] 标题元素数量:`, $titleElem.length);

  const moveIconId = `${areaKey}-move-to-global-icon`;

  // 检查按钮是否已存在
  if ($(`#${moveIconId}`).length > 0) {
    devLog(`[FilterGroup] 移动按钮已存在，跳过添加`);
    return;
  }

  if ($titleElem.length === 0) {
    console.warn(`[FilterGroup] 未找到局部正则脚本的标题元素，无法添加移动按钮`);

    // 尝试备用选择器
    const fallbackSelectors = [
      "#scoped_scripts_block .flex-container strong",
      "#scoped_scripts_block strong",
      "#scoped_scripts_block .flex-container",
      "#scoped_scripts_block > div:first-child"
    ];

    for (const selector of fallbackSelectors) {
      const $fallback = $(selector);
      if ($fallback.length > 0) {
        devLog(`[FilterGroup] 使用备用选择器找到元素: ${selector}`);
        $fallback.append(
          `<i id="${moveIconId}" class="fa-solid fa-arrow-up" style="${config_CONFIG.STYLES.iconStyle}" title="将所有局部脚本移至全局"></i>`
        );

        addDebouncedClickHandler(
          `#${moveIconId}`,
          function () {
            return handleMoveAllScopedToGlobal();
          },
          { operationName: `移动所有局部脚本到全局(${areaKey})` }
        );

        devLog(`[FilterGroup] 移动按钮已通过备用选择器成功添加`);
        return;
      }
    }

    console.error(`[FilterGroup] 所有选择器都未找到合适的元素，无法添加移动按钮`);

    // 最后的备用方案：在局部脚本列表上方创建一个操作栏
    createMoveToGlobalActionBar();
    return;
  }


  // 使用与其他图标按钮完全一致的样式（移除所有硬编码样式）
  $titleElem.append(
    `<i id="${moveIconId}" class="fa-solid fa-arrow-up" style="${config_CONFIG.STYLES.iconStyle}" title="将所有局部脚本移至全局"></i>`
  );

  addDebouncedClickHandler(
    `#${moveIconId}`,
    function () {
      return handleMoveAllScopedToGlobal();
    },
    { operationName: `移动所有局部脚本到全局(${areaKey})` }
  );

  devLog(`[FilterGroup] 移动按钮已成功添加到局部正则脚本区域`);
  devLog(`[FilterGroup] 按钮ID: ${moveIconId}`);
}

// 新增：创建独立的移动操作栏（备用方案）
function createMoveToGlobalActionBar() {
  devLog(`[FilterGroup] 创建独立的移动操作栏...`);

  const actionBarId = 'scoped-regex-move-action-bar';

  // 检查是否已存在
  if ($(`#${actionBarId}`).length > 0) {
    devLog(`[FilterGroup] 操作栏已存在，跳过创建`);
    return;
  }

  // 查找局部脚本列表容器
  const $scopedList = $('#saved_scoped_scripts');
  if ($scopedList.length === 0) {
    console.error(`[FilterGroup] 未找到局部脚本列表容器，无法创建操作栏`);
    return;
  }

  // 创建操作栏HTML
  const actionBarHtml = `
    <div id="${actionBarId}" style="
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 8px 12px;
      margin-bottom: 8px;
      background: var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.1));
      border: 1px solid var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.2));
      border-radius: 6px;
      gap: 8px;
    ">
      <span style="
        font-size: 13px;
        color: var(--SmartThemeBodyColor, inherit);
        opacity: 0.8;
        margin-right: auto;
      ">局部脚本操作：</span>

      <button id="scoped-regex-move-to-global-btn" style="
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        background: var(--SmartThemeBlurTintColor, rgba(30, 30, 30, 0.9));
        color: var(--SmartThemeBodyColor, inherit);
        border: 1px solid var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.3));
        border-radius: 4px;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.2s ease;
      " title="将所有局部脚本移至全局脚本">
        <i class="fa-solid fa-arrow-up" style="font-size: 12px;"></i>
        全部移至全局
      </button>
    </div>
  `;

  // 在局部脚本列表前插入操作栏
  $scopedList.before(actionBarHtml);

  // 添加与其他按钮一致的悬停效果
  $(`#scoped-regex-move-to-global-btn`).hover(
    function () {
      $(this).css({
        'background': 'var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.2))',
        'border-color': 'var(--SmartThemeUnderlineColor, rgba(52, 152, 219, 0.6))'
      });
    },
    function () {
      $(this).css({
        'background': 'var(--SmartThemeBlurTintColor, rgba(30, 30, 30, 0.9))',
        'border-color': 'var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.3))'
      });
    }
  );

  // 绑定点击事件
  addDebouncedClickHandler(
    `#scoped-regex-move-to-global-btn`,
    function () {
      return handleMoveAllScopedToGlobal();
    },
    { operationName: `移动所有局部脚本到全局(备用按钮)` }
  );

  devLog(`[FilterGroup] 独立操作栏创建成功`);
}
// 新增：处理移动所有局部脚本到全局的主函数
async function handleMoveAllScopedToGlobal() {
  const operationId = `move_scoped_to_global_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  devLog(`[FilterGroup] [${operationId}] ======= 开始处理移动局部脚本到全局 =======`);

  try {
    // 兼容性检查
    if (!getTavernRegexes || typeof getTavernRegexes !== 'function') {
      throw new Error("核心函数 getTavernRegexes 不可用");
    }
    if (!replaceTavernRegexes || typeof replaceTavernRegexes !== 'function') {
      throw new Error("核心函数 replaceTavernRegexes 不可用");
    }

    devLog(`[FilterGroup] [${operationId}] 核心API兼容性检查通过`);

    // 获取所有正则表达式数据
    const allRegexes = getTavernRegexes();
    devLog(`[FilterGroup] [${operationId}] 获取到 ${allRegexes.length} 个正则表达式数据`);

    // 【关键调试步骤】：打印完整数据结构
    if (allRegexes.length > 0) {
      devLog(`[FilterGroup] [${operationId}] 数据样例:`, allRegexes[0]);
      devLog(`[FilterGroup] [${operationId}] 数据属性:`, Object.keys(allRegexes[0]));
    }

    // 根据官方API文档，使用正确的属性来筛选局部脚本（scope: 'character'）
    const scopedRegexes = allRegexes.filter(regex => regex.scope === 'character');

    // 【关键调试步骤】：打印我获取到的局部脚本变量
    devLog(`[FilterGroup] [${operationId}] 局部脚本数据:`, scopedRegexes);
    devLog(`[FilterGroup] [${operationId}] 找到 ${scopedRegexes.length} 个局部脚本`);

    if (scopedRegexes.length === 0) {
      devLog(`[FilterGroup] [${operationId}] 没有可移动的局部脚本`);
      showEmptyScopedScriptsDialog();
      return false;
    }

    // 显示确认弹窗
    const userConfirmed = await showMoveConfirmationDialog(scopedRegexes, operationId);

    if (!userConfirmed) {
      devLog(`[FilterGroup] [${operationId}] 用户取消了操作`);
      return false;
    }

    // 执行移动操作
    devLog(`[FilterGroup] [${operationId}] 开始执行移动操作...`);
    const success = await executeMoveOperation(scopedRegexes, allRegexes, operationId);

    if (success) {
      devLog(`[FilterGroup] [${operationId}] 移动操作成功完成`);

      // 刷新UI
      setTimeout(() => {
        devLog(`[FilterGroup] [${operationId}] 开始刷新UI...`);
        if (typeof applyAllUIStates === 'function') {
          applyAllUIStates().then(() => {
            devLog(`[FilterGroup] [${operationId}] UI刷新完成`);
          }).catch(error => {
            console.error(`[FilterGroup] [${operationId}] UI刷新失败:`, error);
          });
        }
      }, 200);

      return true;
    } else {
      console.error(`[FilterGroup] [${operationId}] 移动操作失败`);
      return false;
    }

  } catch (error) {
    console.error(`[FilterGroup] [${operationId}] 处理移动操作时出错:`, error);
    window.alert(`操作失败: ${error.message}\n\n操作ID: ${operationId}\n详细信息请查看浏览器控制台`);
    return false;
  }
}

// 新增：显示空局部脚本提示
function showEmptyScopedScriptsDialog() {
  const modalHtml = `
    <div id="empty-scoped-modal" style="${config_CONFIG.STYLES.modalOverlayStyle}">
      <div class="modal-content" style="${config_CONFIG.STYLES.modalContentStyle}">
        <div class="modal-header" style="${config_CONFIG.STYLES.modalHeaderStyle}">
          <span>提示</span>
          <i class="fa-solid fa-times modal-close" style="cursor: pointer; font-size: 1.2em; padding: 8px; min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center;" title="关闭"></i>
        </div>
        <div class="modal-body" style="${config_CONFIG.STYLES.modalBodyStyle}">
          <div style="text-align: center; padding: 20px;">
            <i class="fa-solid fa-info-circle" style="font-size: 3em; color: var(--SmartThemeUnderlineColor, #4a9eff); margin-bottom: 16px;"></i>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 0;">当前没有可移动的局部脚本。</p>
          </div>
        </div>
        <div class="modal-footer" style="${config_CONFIG.STYLES.modalFooterStyle}">
          <button class="btn-confirm" style="${config_CONFIG.STYLES.buttonStyle}${config_CONFIG.STYLES.primaryButtonStyle}">
            确定
          </button>
        </div>
      </div>
    </div>
  `;

  $('body').append(modalHtml);
  const $modal = $('#empty-scoped-modal');

  // 绑定关闭事件
  $modal.find('.modal-close, .btn-confirm').on('click', function () {
    $modal.animate({ opacity: 0 }, 250, function () {
      $modal.remove();
    });
  });

  // 点击遮罩关闭
  $modal.on('click', function (e) {
    if (e.target === this) {
      $modal.animate({ opacity: 0 }, 250, function () {
        $modal.remove();
      });
    }
  });

  $modal.css('opacity', '0').animate({ opacity: 1 }, 300);
}

// 新增：显示移动确认弹窗
function showMoveConfirmationDialog(scopedRegexes, operationId) {
  return new Promise((resolve) => {
    devLog(`[FilterGroup] [${operationId}] 显示确认弹窗，包含 ${scopedRegexes.length} 个脚本`);

    const scriptListHtml = scopedRegexes.map(regex => {
      const enabledText = regex.enabled ? '✅开启' : '❌关闭';
      const statusColor = regex.enabled ? 'var(--SmartThemeUnderlineColor, #4a9eff)' : 'var(--SmartThemeBorderColor, #ff6b6b)';

      return `<div style="padding: 8px 12px; margin: 4px 0; background: var(--SmartThemeBlurTintColor, rgba(40, 40, 40, 0.6)); border-radius: 4px; border-left: 3px solid ${statusColor};">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 14px; word-break: break-word; flex: 1;">${regex.script_name || `未命名脚本 (ID: ${regex.id})`}</span>
          <span style="font-size: 12px; margin-left: 8px; color: ${statusColor}; font-weight: bold;">${enabledText}</span>
        </div>
      </div>`;
    }).join('');

    const modalHtml = `
      <div id="move-confirmation-modal" style="${config_CONFIG.STYLES.modalOverlayStyle}">
        <div class="modal-content" style="${config_CONFIG.STYLES.modalContentStyle}">
          <div class="modal-header" style="${config_CONFIG.STYLES.modalHeaderStyle}">
            <span>确认移动脚本</span>
            <i class="fa-solid fa-times modal-close" style="cursor: pointer; font-size: 1.2em; padding: 8px; min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center;" title="关闭"></i>
          </div>
          <div class="modal-body" style="${config_CONFIG.STYLES.modalBodyStyle}">
            <div style="margin-bottom: 20px;">
              <p style="font-size: 16px; line-height: 1.5; margin-bottom: 16px;">
                您确定要将以下所有局部脚本移动到全局脚本中吗？此操作会清空局部脚本列表。
              </p>
              <div style="font-weight: bold; margin-bottom: 12px; color: var(--SmartThemeUnderlineColor, #4a9eff);">
                将要移动的脚本 (共 ${scopedRegexes.length} 个)：
              </div>
              <div style="max-height: 300px; overflow-y: auto; border: 1px solid var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.2)); border-radius: 6px; padding: 8px;">
                ${scriptListHtml}
              </div>
              <div style="margin-top: 12px; padding: 8px 12px; background: var(--SmartThemeBlurTintColor, rgba(40, 40, 40, 0.3)); border-radius: 4px; border: 1px solid var(--SmartThemeUnderlineColor, #4a9eff);">
                <span style="font-size: 13px; color: var(--SmartThemeUnderlineColor, #4a9eff);">💡 提示：所有脚本的开关状态将会完整保留</span>
              </div>
            </div>
          </div>
          <div class="modal-footer" style="${config_CONFIG.STYLES.modalFooterStyle}">
            <button class="btn-cancel" style="${config_CONFIG.STYLES.buttonStyle}${config_CONFIG.STYLES.secondaryButtonStyle}">
              取消
            </button>
            <button class="btn-confirm" style="${config_CONFIG.STYLES.buttonStyle}${config_CONFIG.STYLES.primaryButtonStyle}">
              确定移动
            </button>
          </div>
        </div>
      </div>
    `;

    $('body').append(modalHtml);
    const $modal = $('#move-confirmation-modal');

    // 强制确保弹窗在最高层级显示
    $modal.css('z-index', '999999');

    let resolved = false;

    function closeAndResolve(result) {
      if (resolved) return;
      resolved = true;

      devLog(`[FilterGroup] [${operationId}] 用户选择: ${result ? '确定' : '取消'}`);

      $modal.animate({ opacity: 0 }, 250, function () {
        $modal.remove();
        resolve(result);
      });
    }

    // 绑定事件
    $modal.find('.btn-confirm').on('click', function (e) {
      e.stopPropagation();
      closeAndResolve(true);
    });

    $modal.find('.modal-close, .btn-cancel').on('click', function (e) {
      e.stopPropagation();
      closeAndResolve(false);
    });

    // 点击遮罩关闭
    $modal.on('click', function (e) {
      if (e.target === this) {
        closeAndResolve(false);
      }
    });

    // 显示弹窗
    $modal.css('opacity', '0').animate({ opacity: 1 }, 300);
  });
}

// 新增：执行移动操作
async function executeMoveOperation(scopedRegexes, allRegexes, operationId) {
  devLog(`[FilterGroup] [${operationId}] 开始执行移动操作...`);

  try {
    let modifiedCount = 0;
    const movedScripts = [];

    // 检查全局脚本中是否存在同名脚本 - 使用正确的属性名和判断方式
    const globalRegexes = allRegexes.filter(regex => regex.scope === 'global');
    const globalScriptNames = new Set(globalRegexes.map(regex => regex.script_name).filter(name => name));

    devLog(`[FilterGroup] [${operationId}] 当前全局脚本数量: ${globalRegexes.length}`);
    devLog(`[FilterGroup] [${operationId}] 开始处理移动逻辑 (覆盖策略)...`);

    // 创建更新映射
    const regexMap = new Map(allRegexes.map(regex => [regex.id, regex]));

    for (const scopedRegex of scopedRegexes) {
      try {
        const regex = regexMap.get(scopedRegex.id);
        if (regex) {
          // 检查是否存在同名的全局脚本
          if (globalScriptNames.has(regex.script_name)) {
            devLog(`[FilterGroup] [${operationId}] 发现同名全局脚本 "${regex.script_name}"，将执行覆盖`);

            // 查找并删除同名的全局脚本
            const globalRegexIndex = allRegexes.findIndex(r =>
              r.scope === 'global' && r.script_name === regex.script_name
            );

            if (globalRegexIndex !== -1) {
              const removedGlobalRegex = allRegexes.splice(globalRegexIndex, 1)[0];
              devLog(`[FilterGroup] [${operationId}] 已删除同名全局脚本: ID ${removedGlobalRegex.id}`);
            }
          }

          // 【关键】保存原始的开关状态，确保无损移动
          const originalEnabled = regex.enabled;
          devLog(`[FilterGroup] [${operationId}] 移动前状态检查 - 脚本: ${regex.script_name}, enabled: ${originalEnabled}`);

          // 将局部脚本转换为全局脚本 - 只修改 scope，保留所有其他属性
          regex.scope = 'global';

          // 【关键】确保 enabled 状态被明确保留（虽然理论上应该自动保留，但明确设置确保万无一失）
          regex.enabled = originalEnabled;

          // 验证状态保留
          devLog(`[FilterGroup] [${operationId}] 移动后状态验证 - 脚本: ${regex.script_name}, enabled: ${regex.enabled}`);

          modifiedCount++;

          movedScripts.push({
            id: regex.id,
            name: regex.script_name || `未命名脚本 (ID: ${regex.id})`,
            originalScope: 'character',
            newScope: 'global',
            enabledState: regex.enabled  // 添加状态信息到移动记录
          });

          devLog(`[FilterGroup] [${operationId}] ✅ 已移动脚本: ${regex.script_name} (ID: ${regex.id}, enabled: ${regex.enabled})`);
        }
      } catch (error) {
        console.error(`[FilterGroup] [${operationId}] 处理脚本 ${scopedRegex.id} 时出错:`, error);
        // 继续处理其他脚本
      }
    }

    devLog(`[FilterGroup] [${operationId}] 移动处理完成，实际修改了 ${modifiedCount} 个脚本`);

    if (modifiedCount === 0) {
      console.warn(`[FilterGroup] [${operationId}] 没有成功移动任何脚本`);
      window.alert('移动操作失败，没有找到可移动的脚本。');
      return false;
    }

    // 保存更改到存储
    devLog(`[FilterGroup] [${operationId}] 正在保存更改到存储...`);
    await replaceTavernRegexes(allRegexes, {});
    devLog(`[FilterGroup] [${operationId}] 存储更新完成`);

    // 操作完成报告
    devLog(`[FilterGroup] [${operationId}] ======= 移动操作完成报告 =======`);
    devLog(`[FilterGroup] [${operationId}] 成功移动: ${modifiedCount} 个脚本`);
    devLog(`[FilterGroup] [${operationId}] 移动详情:`, movedScripts);
    devLog(`[FilterGroup] [${operationId}] ================================`);

    // 显示成功提示
    showMoveSuccessMessage(modifiedCount, movedScripts);

    // 触发移动完成事件
    if (window.dispatchEvent) {
      const eventDetail = {
        operationId,
        action: 'moveAllScopedToGlobal',
        movedCount: modifiedCount,
        movedScripts: movedScripts,
        timestamp: new Date().toISOString()
      };

      window.dispatchEvent(new CustomEvent('scopedScriptsMovedToGlobal', {
        detail: eventDetail
      }));

      devLog(`[FilterGroup] [${operationId}] 已触发移动完成事件`);
    }

    return true;

  } catch (error) {
    console.error(`[FilterGroup] [${operationId}] 执行移动操作时出错:`, error);
    window.alert(`移动操作失败: ${error.message}\n\n操作ID: ${operationId}\n详细信息请查看浏览器控制台`);
    return false;
  }
}

// 显示移动成功消息
function showMoveSuccessMessage(movedCount, movedScripts) {
  try {
    if (!movedCount || movedCount === 0) {
      return;
    }

    // 构建成功消息
    let message = `✅ 移动操作完成！\n\n`;
    message += `成功将 ${movedCount} 个局部脚本移动到全局区域。\n\n`;

    // 添加移动的脚本名称列表（限制显示前5个）
    if (movedScripts && movedScripts.length > 0) {
      message += `移动的脚本详情:\n`;
      const displayScripts = movedScripts.slice(0, 5);
      displayScripts.forEach((script, index) => {
        const enabledText = script.enabledState ? '✅开启' : '❌关闭';
        message += `${index + 1}. ${script.name} (${enabledText})\n`;
      });

      if (movedScripts.length > 5) {
        message += `... 还有 ${movedScripts.length - 5} 个脚本\n`;
      }
    }

    message += `\n✨ 所有脚本的开关状态已完整保留！\n`;
    message += `📍 移动的脚本现在都可以在全局脚本区域找到。`;

    // 显示成功提示
    if (window.alert) {
      window.alert(message);
    } else {
      devLog(`[FilterGroup] 移动成功消息:`, message);
    }

  } catch (error) {
    console.error(`[FilterGroup] 显示成功消息时出错:`, error);
    // 失败时显示简单消息
    if (window.alert) {
      window.alert(`✅ 成功移动 ${movedCount || 0} 个脚本到全局区域！`);
    }
  }
}

function addGroupHeaderClickHandler($groupHeader, areaKey) {
  addDebouncedClickHandler(
    $groupHeader,
    function () {
      const $header = $(this),
        $icon = $header.find(".group-toggle-icon"),
        $content = $header.next(".script-group-content"),
        isExpanded = $icon.hasClass("fa-angle-up"),
        thisGroupName = $header.find("span").text().split(" (")[0];
      $icon.attr(
        "class",
        `fa-solid fa-angle-${isExpanded ? "down" : "up"} group-toggle-icon`
      ),
        $content[isExpanded ? "hide" : "show"](),
        (function saveGroupFoldState(areaKey, groupName, isFolded) {
          const storageKey = `script_group_fold_state_${areaKey}`,
            foldStates = JSON.parse(localStorage.getItem(storageKey) || "{}");
          (foldStates[groupName] = isFolded),
            localStorage.setItem(storageKey, JSON.stringify(foldStates));
        })(areaKey, thisGroupName, isExpanded);
    },
    { minDelay: 200, operationName: `切换分组(${areaKey})` }
  );
}
// 优化后的批量操作函数，采用批量处理机制提升性能，并加强错误处理和日志记录
async function batchOperateRegexes($items, action, applyUIState) {
  const operationId = `batch_${action}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  devLog(`[FilterGroup] 开始批量操作 [${operationId}]: ${action}`);
  devLog(`[FilterGroup] 操作目标项目数量: ${$items.length}`);

  window.batchOperationInProgress = true;
  const operationStartTime = performance.now();

  try {
    // 严格的兼容性检查
    if (!window.getTavernRegexes || typeof window.getTavernRegexes !== 'function') {
      if (!getTavernRegexes || typeof getTavernRegexes !== 'function') {
        const errorMsg = "关键错误：核心函数 getTavernRegexes 完全不可用";
        console.error(`[FilterGroup] ${errorMsg}`);
        throw new Error(errorMsg);
      }
    }

    if (!window.replaceTavernRegexes || typeof window.replaceTavernRegexes !== 'function') {
      if (!replaceTavernRegexes || typeof replaceTavernRegexes !== 'function') {
        const errorMsg = "关键错误：核心函数 replaceTavernRegexes 完全不可用";
        console.error(`[FilterGroup] ${errorMsg}`);
        throw new Error(errorMsg);
      }
    }

    devLog(`[FilterGroup] [${operationId}] 核心API兼容性检查通过`);

    // 性能优化：一次性获取所有数据，避免重复DOM查询
    const allRegexes = getTavernRegexes();
    devLog(`[FilterGroup] [${operationId}] 获取到 ${allRegexes.length} 个正则表达式数据`);

    if (!allRegexes || !Array.isArray(allRegexes)) {
      throw new Error("获取的正则表达式数据格式无效");
    }

    const itemIdsToProcess = new Set();

    // 批量收集需要处理的ID，避免逐个DOM操作，并增加详细日志
    const itemsArray = Array.from($items);
    devLog(`[FilterGroup] [${operationId}] 开始收集目标项目ID...`);

    for (let i = 0; i < itemsArray.length; i++) {
      const item = itemsArray[i];
      const $item = $(item);
      const itemId = $item.attr('id');

      if (itemId) {
        itemIdsToProcess.add(itemId);
        devLog(`[FilterGroup] [${operationId}] 收集ID [${i + 1}/${itemsArray.length}]: ${itemId}`);
      } else {
        console.warn(`[FilterGroup] [${operationId}] 项目 [${i + 1}/${itemsArray.length}] 缺少ID属性，跳过`);
      }
    }

    if (itemIdsToProcess.size === 0) {
      console.warn(`[FilterGroup] [${operationId}] 没有找到需要操作的有效正则表达式项目`);
      window.alert("没有找到需要操作的项目，请检查选择。");
      return false;
    }

    devLog(`[FilterGroup] [${operationId}] 成功收集 ${itemIdsToProcess.size} 个有效ID`);
    devLog(`[FilterGroup] [${operationId}] 目标ID列表:`, Array.from(itemIdsToProcess));

    // 性能优化：批量状态变更，避免逐条处理
    let modifiedCount = 0;
    let operationDetails = [];

    if (action === "enable" || action === "disable") {
      const shouldBeEnabled = action === "enable";
      devLog(`[FilterGroup] [${operationId}] 执行批量${shouldBeEnabled ? '启用' : '禁用'}操作...`);

      // 使用 Map 进行快速查找，提升性能
      const regexMap = new Map(allRegexes.map(regex => [regex.id, regex]));
      devLog(`[FilterGroup] [${operationId}] 正则表达式映射表创建完成，包含 ${regexMap.size} 个条目`);

      for (const itemId of itemIdsToProcess) {
        const regex = regexMap.get(itemId);
        if (regex) {
          const originalState = regex.enabled;
          if (regex.enabled !== shouldBeEnabled) {
            regex.enabled = shouldBeEnabled;
            modifiedCount++;
            operationDetails.push({
              id: itemId,
              name: regex.script_name || `ID-${itemId}`,
              originalState,
              newState: shouldBeEnabled
            });
            devLog(`[FilterGroup] [${operationId}] 修改项目 ${itemId}: ${originalState} -> ${shouldBeEnabled}`);
          } else {
            devLog(`[FilterGroup] [${operationId}] 项目 ${itemId} 状态已是目标状态，跳过`);
          }
        } else {
          console.warn(`[FilterGroup] [${operationId}] 在数据中未找到ID为 ${itemId} 的正则表达式`);
        }
      }

      devLog(`[FilterGroup] [${operationId}] 批量${shouldBeEnabled ? '启用' : '禁用'}完成，修改了 ${modifiedCount} 个项目`);

    } else if (action === "delete") {
      devLog(`[FilterGroup] [${operationId}] 执行批量删除操作...`);

      const originalLength = allRegexes.length;
      const itemsToDelete = allRegexes.filter(regex => itemIdsToProcess.has(regex.id));

      devLog(`[FilterGroup] [${operationId}] 找到 ${itemsToDelete.length} 个待删除项目`);

      // 记录删除详情
      itemsToDelete.forEach(regex => {
        operationDetails.push({
          id: regex.id,
          name: regex.script_name || `ID-${regex.id}`,
          action: 'deleted'
        });
        devLog(`[FilterGroup] [${operationId}] 准备删除: ${regex.id} - ${regex.script_name || '未命名'}`);
      });

      // 使用 filter 进行批量删除
      const filteredRegexes = allRegexes.filter(regex => !itemIdsToProcess.has(regex.id));
      modifiedCount = originalLength - filteredRegexes.length;

      devLog(`[FilterGroup] [${operationId}] 删除操作完成: 原有 ${originalLength} 个，删除 ${modifiedCount} 个，剩余 ${filteredRegexes.length} 个`);

      if (modifiedCount > 0) {
        // 立即执行删除操作
        devLog(`[FilterGroup] [${operationId}] 正在应用删除操作到存储...`);
        await replaceTavernRegexes(filteredRegexes, {});
        devLog(`[FilterGroup] [${operationId}] 删除操作已应用到存储`);
      }
    } else {
      throw new Error(`未知的批量操作类型: ${action}`);
    }

    // 只有在实际修改了数据时才调用 replaceTavernRegexes（非删除操作）
    if (modifiedCount > 0 && action !== "delete") {
      devLog(`[FilterGroup] [${operationId}] 正在应用状态变更到存储...`);
      await replaceTavernRegexes(allRegexes, {});
      devLog(`[FilterGroup] [${operationId}] 状态变更已应用到存储`);
    }

    const operationDuration = performance.now() - operationStartTime;

    // 详细的操作报告
    devLog(`[FilterGroup] [${operationId}] ======= 批量操作完成报告 =======`);
    devLog(`[FilterGroup] [${operationId}] 操作类型: ${action}`);
    devLog(`[FilterGroup] [${operationId}] 处理时间: ${operationDuration.toFixed(2)}ms`);
    devLog(`[FilterGroup] [${operationId}] 目标项目: ${itemIdsToProcess.size} 个`);
    devLog(`[FilterGroup] [${operationId}] 实际修改: ${modifiedCount} 个`);
    devLog(`[FilterGroup] [${operationId}] 操作详情:`, operationDetails);
    devLog(`[FilterGroup] [${operationId}] ================================`);

    // 只在有实际修改时刷新UI
    if (modifiedCount > 0) {
      devLog(`[FilterGroup] [${operationId}] 准备刷新UI...`);

      // 使用 requestAnimationFrame 优化UI更新时机
      requestAnimationFrame(() => {
        setTimeout(() => {
          devLog(`[FilterGroup] [${operationId}] 正在刷新UI...`);

          if (typeof applyAllUIStates === 'function') {
            applyAllUIStates().then(() => {
              devLog(`[FilterGroup] [${operationId}] UI刷新完成`);
            }).catch(error => {
              console.error(`[FilterGroup] [${operationId}] UI刷新失败:`, error);
            });
          } else {
            console.warn(`[FilterGroup] [${operationId}] applyAllUIStates 函数不可用`);
          }

          // 触发状态同步事件
          if (window.dispatchEvent) {
            const eventDetail = {
              operationId,
              action,
              modifiedCount,
              itemIds: Array.from(itemIdsToProcess),
              operationDetails,
              duration: operationDuration
            };

            window.dispatchEvent(new CustomEvent('regexBatchOperationCompleted', {
              detail: eventDetail
            }));

            devLog(`[FilterGroup] [${operationId}] 已触发完成事件:`, eventDetail);
          }
        }, 150);
      });
    } else {
      devLog(`[FilterGroup] [${operationId}] 没有实际修改，跳过UI刷新`);
    }

    return true;

  } catch (error) {
    const errorDetails = {
      operationId,
      action,
      error: error.message,
      stack: error.stack,
      itemCount: $items.length,
      timestamp: new Date().toISOString()
    };

    console.error(`[FilterGroup] [${operationId}] ======= 批量操作失败报告 =======`);
    console.error(`[FilterGroup] [${operationId}] 错误详情:`, errorDetails);
    console.error(`[FilterGroup] [${operationId}] 完整错误对象:`, error);
    console.error(`[FilterGroup] [${operationId}] ================================`);

    // 提供用户友好的错误提示
    let userMessage = `批量${action}操作失败`;
    if (error.message.includes('getTavernRegexes') || error.message.includes('replaceTavernRegexes')) {
      userMessage += '：核心功能不可用，请刷新页面后重试';
    } else if (error.message.includes('网络') || error.message.includes('network')) {
      userMessage += '：网络错误，请检查连接后重试';
    } else {
      userMessage += `：${error.message}`;
    }

    if (window.alert) {
      window.alert(`${userMessage}\n\n操作ID: ${operationId}\n详细信息请查看浏览器控制台`);
    }

    return false;
  } finally {
    window.batchOperationInProgress = false;
    devLog(`[FilterGroup] [${operationId}] 批量操作流程结束，已清理操作状态`);
  }
}

// 新增：创建精细化管理模态窗口（彻底重构，确保完美居中显示）
function createRegexManagementModal(groupName, $groupContent, areaKey) {
  // 强制移除任何已存在的模态窗口
  $('#regex-management-modal').remove();
  $('#modal-responsive-styles').remove();

  devLog(`[FilterGroup] 正在为分组 "${groupName}" 创建管理模态窗口...`);

  // 修复BUG：不再依赖DOM可见性，直接从数据源获取规则
  const groupRegexes = getRegexesByGroupName(groupName, areaKey);

  if (groupRegexes.length === 0) {
    window.alert(`分组 "${groupName}" 内没有可管理的正则表达式。`);
    return;
  }

  devLog(`[FilterGroup] 成功获取分组 "${groupName}" 的 ${groupRegexes.length} 个规则`);

  // 创建模态窗口HTML（彻底重构响应式设计）
  const modalHtml = `
    <div id="regex-management-modal" style="${config_CONFIG.STYLES.modalOverlayStyle}">
      <div class="modal-content" style="${config_CONFIG.STYLES.modalContentStyle}">
        <div class="modal-header" style="${config_CONFIG.STYLES.modalHeaderStyle}">
          <span>管理分组：${groupName}</span>
          <i class="fa-solid fa-times modal-close" style="cursor: pointer; font-size: clamp(1.2em, 4vw, 1.5em); padding: 8px; min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 4px; transition: background-color 0.2s;" title="关闭"></i>
        </div>
        <div class="modal-body" style="${config_CONFIG.STYLES.modalBodyStyle}">
          <div style="margin-bottom: 16px; padding: clamp(8px, 2vw, 16px); background: var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.1)); border-radius: clamp(4px, 1vw, 8px); border: 1px solid var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.15));">
            <div id="selection-stats" style="font-size: clamp(13px, 3vw, 15px); color: var(--SmartThemeBodyColor, inherit); text-align: center; font-weight: 500;">
              已选择: <span id="selected-count" style="color: var(--SmartThemeUnderlineColor, #4a9eff); font-weight: bold;">${groupRegexes.filter(r => r.enabled).length}</span> / <span id="total-count" style="font-weight: bold;">${groupRegexes.length}</span> 个规则
            </div>
          </div>
          <div class="regex-list" id="regex-management-list">
            ${groupRegexes.map(item => `
              <div class="regex-item" data-regex-id="${item.id}" style="${config_CONFIG.STYLES.regexItemStyle}">
                <label style="display: flex; align-items: center; width: 100%; cursor: pointer; padding: 4px 0;">
                  <input type="checkbox" ${item.enabled ? 'checked' : ''}
                         style="margin-right: clamp(12px, 3vw, 16px); transform: scale(clamp(1.2, 3vw, 1.6)); flex-shrink: 0;"
                         data-original-state="${item.enabled}" />
                  <span style="flex: 1; font-size: clamp(13px, 3vw, 15px); word-break: break-word; line-height: 1.4; color: var(--SmartThemeBodyColor, inherit);">${item.name}</span>
                </label>
              </div>
            `).join('')}
          </div>
          <div style="margin-top: clamp(12px, 3vw, 20px); padding-top: clamp(12px, 3vw, 16px); border-top: 1px solid var(--SmartThemeBorderColor, rgba(240, 240, 240, 0.2));">
            <div style="display: flex; gap: clamp(6px, 2vw, 12px); justify-content: center; flex-wrap: wrap;">
              <button class="batch-select-all" style="${config_CONFIG.STYLES.buttonStyle}${config_CONFIG.STYLES.secondaryButtonStyle}">
                全选
              </button>
              <button class="batch-select-none" style="${config_CONFIG.STYLES.buttonStyle}${config_CONFIG.STYLES.secondaryButtonStyle}">
                全不选
              </button>
              <button class="batch-invert" style="${config_CONFIG.STYLES.buttonStyle}${config_CONFIG.STYLES.secondaryButtonStyle}">
                反选
              </button>
            </div>
          </div>
        </div>
        <div class="modal-footer" style="${config_CONFIG.STYLES.modalFooterStyle}">
          <button class="btn-cancel" style="${config_CONFIG.STYLES.buttonStyle}${config_CONFIG.STYLES.secondaryButtonStyle}">
            取消
          </button>
          <button class="btn-confirm" style="${config_CONFIG.STYLES.buttonStyle}${config_CONFIG.STYLES.primaryButtonStyle}">
            确定
          </button>
        </div>
      </div>
    </div>
  `;

  // 关键修复：强制插入到body的最顶层，确保不受父容器影响
  $('body').append(modalHtml);
  const $modal = $('#regex-management-modal');

  // 强制确保弹窗在最高层级显示
  $modal.css({
    'z-index': '999999',
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'width': '100vw',
    'height': '100vh'
  });

  // 添加完善的响应式样式
  addComprehensiveResponsiveStyles($modal);

  devLog('[FilterGroup] 模态窗口已创建并添加到DOM，正在绑定事件...');

  // 添加悬停效果和触摸反馈
  addInteractionEffects($modal);

  // 添加复选框变化事件监听，实时更新统计
  $modal.find('input[type="checkbox"]').on('change', function () {
    updateSelectionStats($modal);
  });

  // 绑定事件处理器
  bindModalEvents($modal, groupRegexes, areaKey, groupName);

  // 显示模态窗口（添加淡入效果）
  $modal.css('opacity', '0').animate({ opacity: 1 }, 300);

  devLog('[FilterGroup] 模态窗口创建完成并已显示');
}

// 新增：添加全面的响应式样式（彻底重构移动端优化）
function addComprehensiveResponsiveStyles($modal) {
  // 强制移除旧样式
  $('#modal-responsive-styles').remove();

  // 检测设备类型
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  devLog(`[FilterGroup] 设备检测: ${isMobile ? '移动设备' : isTablet ? '平板设备' : '桌面设备'}, 屏幕宽度: ${window.innerWidth}px`);

  // 创建完全重构的响应式CSS
  const comprehensiveCSS = `
    <style id="modal-responsive-styles">
      /* 基础样式重置 - 确保弹窗完全脱离父容器影响 */
      #regex-management-modal {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 999999 !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        padding: 0 !important;
        margin: 0 !important;
        box-sizing: border-box !important;
        background: rgba(0, 0, 0, 0.65) !important;
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
      }

      #regex-management-modal .modal-content {
        position: relative !important;
        margin: 0 !important;
        transform: none !important;
        max-width: min(580px, 92vw) !important;
        max-height: min(85vh, calc(100vh - 40px)) !important;
        width: auto !important;
        height: auto !important;
        overflow: hidden !important;
        border-radius: 12px !important;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5) !important;
      }

      /* 确保头部、身体、底部的布局稳定 */
      #regex-management-modal .modal-header {
        flex-shrink: 0 !important;
        border-radius: 12px 12px 0 0 !important;
      }

      #regex-management-modal .modal-body {
        flex: 1 !important;
        min-height: 200px !important;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        -webkit-overflow-scrolling: touch !important;
      }

      #regex-management-modal .modal-footer {
        flex-shrink: 0 !important;
        border-radius: 0 0 12px 12px !important;
      }

      /* 平板设备优化 (768px - 1024px) */
      @media (min-width: 768px) and (max-width: 1024px) {
        #regex-management-modal .modal-content {
          max-width: min(520px, 88vw) !important;
          max-height: min(82vh, calc(100vh - 60px)) !important;
        }

        #regex-management-modal .modal-header {
          padding: 16px 20px !important;
          font-size: 1.15em !important;
        }

        #regex-management-modal .modal-body {
          padding: 18px 20px !important;
        }

        #regex-management-modal .modal-footer {
          padding: 14px 20px !important;
        }

        #regex-management-modal button {
          min-height: 46px !important;
          padding: 12px 18px !important;
          font-size: 15px !important;
        }
      }

      /* 移动设备优化 (≤ 768px) */
      @media (max-width: 768px) {
        #regex-management-modal {
          padding: 8px !important;
          align-items: flex-start !important;
          padding-top: max(20px, env(safe-area-inset-top, 20px)) !important;
        }

        #regex-management-modal .modal-content {
          max-width: calc(100vw - 16px) !important;
          max-height: calc(100vh - 40px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px)) !important;
          margin-top: 0 !important;
          border-radius: 16px !important;
        }

        #regex-management-modal .modal-header {
          padding: 16px 18px !important;
          font-size: 1.1em !important;
          border-radius: 16px 16px 0 0 !important;
        }

        #regex-management-modal .modal-body {
          padding: 16px 18px !important;
          min-height: 180px !important;
        }

        #regex-management-modal .modal-footer {
          padding: 14px 18px !important;
          gap: 10px !important;
          border-radius: 0 0 16px 16px !important;
        }

        #regex-management-modal .regex-item {
          padding: 14px 12px !important;
          margin: 8px 0 !important;
          min-height: 56px !important;
          border-radius: 8px !important;
        }

        #regex-management-modal input[type="checkbox"] {
          transform: scale(1.4) !important;
          margin-right: 14px !important;
        }

        #regex-management-modal button {
          min-height: 48px !important;
          padding: 14px 16px !important;
          font-size: 16px !important;
          flex: 1 !important;
          border-radius: 8px !important;
        }

        #regex-management-modal .modal-close {
          font-size: 1.4em !important;
          padding: 10px !important;
          min-width: 48px !important;
          min-height: 48px !important;
          border-radius: 8px !important;
        }

        #regex-management-modal .modal-close:hover {
          background: rgba(255, 255, 255, 0.1) !important;
        }
      }

      /* 小屏幕移动设备优化 (≤ 480px) */
      @media (max-width: 480px) {
        #regex-management-modal {
          padding: 4px !important;
          padding-top: max(16px, env(safe-area-inset-top, 16px)) !important;
        }

        #regex-management-modal .modal-content {
          max-width: calc(100vw - 8px) !important;
          max-height: calc(100vh - 32px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px)) !important;
          border-radius: 20px !important;
        }

        #regex-management-modal .modal-header {
          padding: 18px 16px !important;
          font-size: 1.05em !important;
          border-radius: 20px 20px 0 0 !important;
        }

        #regex-management-modal .modal-body {
          padding: 16px !important;
        }

        #regex-management-modal .modal-footer {
          padding: 16px !important;
          flex-direction: column !important;
          border-radius: 0 0 20px 20px !important;
        }

        #regex-management-modal .modal-footer button {
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
        }

        #regex-management-modal .regex-item {
          padding: 16px 14px !important;
          min-height: 60px !important;
          border-radius: 10px !important;
        }

        #regex-management-modal span {
          font-size: 15px !important;
          line-height: 1.4 !important;
        }
      }

      /* 超小屏幕设备优化 (≤ 360px) */
      @media (max-width: 360px) {
        #regex-management-modal .modal-header {
          font-size: 1em !important;
          padding: 16px 14px !important;
        }

        #regex-management-modal .modal-body {
          padding: 14px !important;
        }

        #regex-management-modal .modal-footer {
          padding: 14px !important;
        }

        #regex-management-modal .regex-item {
          padding: 14px 12px !important;
          min-height: 56px !important;
        }

        #regex-management-modal button {
          font-size: 15px !important;
          padding: 12px 14px !important;
        }
      }

      /* 横屏移动设备特殊处理 */
      @media (max-width: 768px) and (orientation: landscape) {
        #regex-management-modal {
          align-items: center !important;
          padding: 6px !important;
        }

        #regex-management-modal .modal-content {
          max-height: calc(100vh - 12px) !important;
        }

        #regex-management-modal .modal-body {
          min-height: 140px !important;
        }
      }

      /* 触摸设备特殊优化 */
      @media (hover: none) and (pointer: coarse) {
        #regex-management-modal .regex-item:active {
          background: var(--SmartThemeBorderColor, rgba(80, 80, 80, 0.9)) !important;
          transform: scale(0.98) !important;
        }

        #regex-management-modal button:active {
          transform: scale(0.96) !important;
        }

        #regex-management-modal .modal-close:active {
          background: rgba(255, 255, 255, 0.15) !important;
          transform: scale(0.94) !important;
        }
      }
    </style>
  `;

  // 添加CSS到页面
  $('head').append(comprehensiveCSS);

  devLog('[FilterGroup] 已应用全面的响应式样式');
}

// 新增：添加交互效果（替代原来的移动端优化函数）
function addInteractionEffects($modal) {
  // 检测设备类型
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  devLog(`[FilterGroup] 设备类型: ${isTouchDevice ? '触摸设备' : '非触摸设备'}`);

  // 为规则项添加悬停/触摸效果
  $modal.find('.regex-item').each(function () {
    const $item = $(this);

    if (isTouchDevice) {
      // 触摸设备：使用触摸事件
      $item.on('touchstart', function (e) {
        $(this).css({
          'background': 'var(--SmartThemeBorderColor, rgba(80, 80, 80, 0.9))',
          'transform': 'scale(0.98)',
          'transition': 'all 0.15s ease'
        });
      }).on('touchend touchcancel', function () {
        const $this = $(this);
        setTimeout(() => {
          $this.css({
            'background': 'var(--SmartThemeBlurTintColor, rgba(40, 40, 40, 0.8))',
            'transform': 'scale(1)',
            'transition': 'all 0.2s ease'
          });
        }, 120);
      });
    } else {
      // 非触摸设备：使用鼠标悬停
      $item.hover(
        function () {
          $(this).css({
            'background': 'var(--SmartThemeBorderColor, rgba(60, 60, 60, 0.8))',
            'transform': 'translateY(-1px)',
            'transition': 'all 0.2s ease'
          });
        },
        function () {
          $(this).css({
            'background': 'var(--SmartThemeBlurTintColor, rgba(40, 40, 40, 0.8))',
            'transform': 'translateY(0)',
            'transition': 'all 0.2s ease'
          });
        }
      );
    }
  });

  // 为关闭按钮添加悬停效果
  $modal.find('.modal-close').hover(
    function () {
      $(this).css('background', 'rgba(255, 255, 255, 0.1)');
    },
    function () {
      $(this).css('background', 'transparent');
    }
  );

  // 为按钮添加点击反馈
  $modal.find('button').on('mousedown touchstart', function () {
    $(this).css('transform', 'scale(0.96)');
  }).on('mouseup mouseleave touchend', function () {
    $(this).css('transform', 'scale(1)');
  });
}

// 新增：专门的批量删除函数（解决折叠状态BUG，优化性能）
async function batchDeleteRegexesByGroup(groupName, areaKey, $groupHeader) {
  const operationId = `batch_delete_group_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  devLog(`[FilterGroup] [${operationId}] ======= 开始批量删除分组 =======`);
  devLog(`[FilterGroup] [${operationId}] 目标分组: "${groupName}"`);
  devLog(`[FilterGroup] [${operationId}] 区域: ${areaKey}`);

  // 立即添加视觉反馈 - 显示加载状态
  const $loadingIndicator = addLoadingState($groupHeader, operationId, "正在删除...");

  window.batchOperationInProgress = true;
  const operationStartTime = performance.now();

  try {
    // 严格的兼容性检查
    if (!getTavernRegexes || typeof getTavernRegexes !== 'function') {
      throw new Error("核心函数 getTavernRegexes 不可用");
    }
    if (!replaceTavernRegexes || typeof replaceTavernRegexes !== 'function') {
      throw new Error("核心函数 replaceTavernRegexes 不可用");
    }

    devLog(`[FilterGroup] [${operationId}] 核心API兼容性检查通过`);

    // 第一步：统一收集 - 直接从数据源获取分组下的所有规则
    devLog(`[FilterGroup] [${operationId}] 正在从数据源收集分组规则...`);
    const groupRegexes = getRegexesByGroupName(groupName, areaKey);

    if (groupRegexes.length === 0) {
      console.warn(`[FilterGroup] [${operationId}] 分组 "${groupName}" 内没有可删除的规则`);
      window.alert(`分组 "${groupName}" 内没有可删除的正则表达式。`);
      return false;
    }

    // 提取所有规则ID
    const regexIdsToDelete = groupRegexes.map(regex => regex.id);
    const regexNamesToDelete = groupRegexes.map(regex => regex.name);

    devLog(`[FilterGroup] [${operationId}] 收集完成:`);
    devLog(`[FilterGroup] [${operationId}] - 规则数量: ${regexIdsToDelete.length}`);
    devLog(`[FilterGroup] [${operationId}] - 规则ID列表:`, regexIdsToDelete);
    devLog(`[FilterGroup] [${operationId}] - 规则名称:`, regexNamesToDelete);

    // 第二步：单次数据操作 - 批量删除
    devLog(`[FilterGroup] [${operationId}] 正在执行批量数据删除...`);

    const allRegexes = getTavernRegexes();
    const originalCount = allRegexes.length;

    devLog(`[FilterGroup] [${operationId}] 删除前总规则数: ${originalCount}`);

    // 创建删除ID的Set以提高查找性能
    const deleteIdSet = new Set(regexIdsToDelete);

    // 一次性过滤删除所有目标规则
    const filteredRegexes = allRegexes.filter(regex => !deleteIdSet.has(regex.id));
    const actualDeletedCount = originalCount - filteredRegexes.length;

    devLog(`[FilterGroup] [${operationId}] 删除后总规则数: ${filteredRegexes.length}`);
    devLog(`[FilterGroup] [${operationId}] 实际删除数量: ${actualDeletedCount}`);

    if (actualDeletedCount === 0) {
      console.warn(`[FilterGroup] [${operationId}] 没有找到匹配的规则进行删除`);
      window.alert(`没有找到需要删除的规则，可能已被其他操作删除。`);
      return false;
    }

    // 单次写回操作
    devLog(`[FilterGroup] [${operationId}] 正在应用删除到存储...`);
    await replaceTavernRegexes(filteredRegexes, {});
    devLog(`[FilterGroup] [${operationId}] 存储更新完成`);

    const operationDuration = performance.now() - operationStartTime;

    // 操作完成报告
    devLog(`[FilterGroup] [${operationId}] ======= 批量删除完成报告 =======`);
    devLog(`[FilterGroup] [${operationId}] 分组名称: ${groupName}`);
    devLog(`[FilterGroup] [${operationId}] 删除耗时: ${operationDuration.toFixed(2)}ms`);
    devLog(`[FilterGroup] [${operationId}] 预期删除: ${regexIdsToDelete.length} 个`);
    devLog(`[FilterGroup] [${operationId}] 实际删除: ${actualDeletedCount} 个`);
    devLog(`[FilterGroup] [${operationId}] 删除规则详情:`, regexNamesToDelete);
    devLog(`[FilterGroup] [${operationId}] ================================`);

    // 第三步：单次UI更新 - 立即移除整个分组DOM
    devLog(`[FilterGroup] [${operationId}] 正在执行UI更新...`);

    // 使用动画效果优雅地移除分组
    await removeGroupWithAnimation($groupHeader, operationId);

    // 触发全局状态更新事件
    if (window.dispatchEvent) {
      const eventDetail = {
        operationId,
        action: 'batchDeleteGroup',
        groupName,
        areaKey,
        deletedCount: actualDeletedCount,
        deletedIds: regexIdsToDelete,
        deletedNames: regexNamesToDelete,
        duration: operationDuration
      };

      window.dispatchEvent(new CustomEvent('regexGroupBatchDeleted', {
        detail: eventDetail
      }));

      devLog(`[FilterGroup] [${operationId}] 已触发分组删除完成事件`);
    }

    // 延迟刷新整体UI，确保数据同步
    setTimeout(() => {
      devLog(`[FilterGroup] [${operationId}] 开始全局UI刷新...`);
      if (typeof applyAllUIStates === 'function') {
        applyAllUIStates().then(() => {
          devLog(`[FilterGroup] [${operationId}] 全局UI刷新完成`);
        }).catch(error => {
          console.error(`[FilterGroup] [${operationId}] 全局UI刷新失败:`, error);
        });
      }
    }, 300);

    return true;

  } catch (error) {
    const errorDetails = {
      operationId,
      groupName,
      areaKey,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    };

    console.error(`[FilterGroup] [${operationId}] ======= 批量删除失败报告 =======`);
    console.error(`[FilterGroup] [${operationId}] 错误详情:`, errorDetails);
    console.error(`[FilterGroup] [${operationId}] 完整错误对象:`, error);
    console.error(`[FilterGroup] [${operationId}] ================================`);

    // 移除加载状态
    removeLoadingState($loadingIndicator, operationId);

    // 用户友好的错误提示
    let userMessage = `批量删除分组"${groupName}"失败`;
    if (error.message.includes('getTavernRegexes') || error.message.includes('replaceTavernRegexes')) {
      userMessage += '：核心功能不可用，请刷新页面后重试';
    } else if (error.message.includes('网络') || error.message.includes('network')) {
      userMessage += '：网络错误，请检查连接后重试';
    } else {
      userMessage += `：${error.message}`;
    }

    window.alert(`${userMessage}\n\n操作ID: ${operationId}\n详细信息请查看浏览器控制台`);

    return false;
  } finally {
    window.batchOperationInProgress = false;
    devLog(`[FilterGroup] [${operationId}] 批量删除流程结束`);
  }
}

// 新增：添加加载状态指示器（支持自定义文案）
function addLoadingState($groupHeader, operationId, message = "正在处理...") {
  devLog(`[FilterGroup] [${operationId}] 添加加载状态指示器: ${message}`);

  // 创建加载指示器
  const $loadingIndicator = $(`
    <div class="group-loading-indicator" style="
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      z-index: 1000;
      color: white;
      font-size: 0.9em;
    ">
      <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px;"></i>
      ${message}
    </div>
  `);

  // 设置分组头为相对定位，以便加载指示器正确覆盖
  $groupHeader.css('position', 'relative');

  // 添加加载指示器
  $groupHeader.append($loadingIndicator);

  // 禁用分组头的所有交互
  $groupHeader.css('pointer-events', 'none');

  devLog(`[FilterGroup] [${operationId}] 加载状态指示器已添加`);

  return $loadingIndicator;
}

// 新增：移除加载状态
function removeLoadingState($loadingIndicator, operationId) {
  devLog(`[FilterGroup] [${operationId}] 移除加载状态指示器...`);

  if ($loadingIndicator && $loadingIndicator.length > 0) {
    $loadingIndicator.remove();
  }

  // 恢复分组头的交互能力
  $('.script-group-header').css('pointer-events', 'auto');

  devLog(`[FilterGroup] [${operationId}] 加载状态指示器已移除`);
}

// 新增：优雅地移除分组（带动画效果）
async function removeGroupWithAnimation($groupHeader, operationId) {
  devLog(`[FilterGroup] [${operationId}] 开始执行分组移除动画...`);

  try {
    const $groupContent = $groupHeader.next('.script-group-content');
    const $groupElements = $groupHeader.add($groupContent);

    // 添加淡出动画
    $groupElements.animate({
      opacity: 0,
      height: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0
    }, {
      duration: 400,
      complete: function () {
        devLog(`[FilterGroup] [${operationId}] 分组DOM移除动画完成，正在移除元素...`);
        $groupElements.remove();
        devLog(`[FilterGroup] [${operationId}] 分组DOM已完全移除`);
      }
    });

    // 等待动画完成
    await new Promise(resolve => setTimeout(resolve, 450));

  } catch (error) {
    console.error(`[FilterGroup] [${operationId}] 分组移除动画失败:`, error);
    // 强制移除
    $groupHeader.add($groupHeader.next('.script-group-content')).remove();
  }
}

// 新增：批量更新分组规则状态（启用/禁用）- 解决折叠状态BUG，优化性能
async function batchUpdateRegexStateByGroup(groupName, areaKey, enableState, $groupHeader) {
  const operationId = `batch_${enableState ? 'enable' : 'disable'}_group_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const actionName = enableState ? '启用' : '禁用';

  devLog(`[FilterGroup] [${operationId}] ======= 开始批量${actionName}分组 =======`);
  devLog(`[FilterGroup] [${operationId}] 目标分组: "${groupName}"`);
  devLog(`[FilterGroup] [${operationId}] 区域: ${areaKey}`);
  devLog(`[FilterGroup] [${operationId}] 目标状态: ${enableState ? '启用' : '禁用'}`);

  // 立即添加视觉反馈
  const actionMessage = enableState ? "正在开启..." : "正在关闭...";
  const $loadingIndicator = addLoadingState($groupHeader, operationId, actionMessage);

  window.batchOperationInProgress = true;
  const operationStartTime = performance.now();

  try {
    // 兼容性检查
    if (!getTavernRegexes || typeof getTavernRegexes !== 'function') {
      throw new Error("核心函数 getTavernRegexes 不可用");
    }
    if (!replaceTavernRegexes || typeof replaceTavernRegexes !== 'function') {
      throw new Error("核心函数 replaceTavernRegexes 不可用");
    }

    devLog(`[FilterGroup] [${operationId}] 核心API兼容性检查通过`);

    // 第一步：统一收集 - 直接从数据源获取分组规则
    devLog(`[FilterGroup] [${operationId}] 正在从数据源收集分组规则...`);
    const groupRegexes = getRegexesByGroupName(groupName, areaKey);

    if (groupRegexes.length === 0) {
      console.warn(`[FilterGroup] [${operationId}] 分组 "${groupName}" 内没有可${actionName}的规则`);
      window.alert(`分组 "${groupName}" 内没有可${actionName}的正则表达式。`);
      return false;
    }

    // 筛选需要更新状态的规则
    const regexesToUpdate = groupRegexes.filter(regex => regex.enabled !== enableState);

    if (regexesToUpdate.length === 0) {
      devLog(`[FilterGroup] [${operationId}] 分组内所有规则已经是目标状态，无需更新`);
      window.alert(`分组 "${groupName}" 内的所有规则已经是${actionName}状态。`);
      return false;
    }

    const regexIdsToUpdate = regexesToUpdate.map(regex => regex.id);
    const regexNamesToUpdate = regexesToUpdate.map(regex => regex.name);

    devLog(`[FilterGroup] [${operationId}] 收集完成:`);
    devLog(`[FilterGroup] [${operationId}] - 总规则数量: ${groupRegexes.length}`);
    devLog(`[FilterGroup] [${operationId}] - 需要更新数量: ${regexesToUpdate.length}`);
    devLog(`[FilterGroup] [${operationId}] - 更新规则ID列表:`, regexIdsToUpdate);

    // 第二步：单次数据操作 - 批量状态更新
    devLog(`[FilterGroup] [${operationId}] 正在执行批量状态更新...`);

    const allRegexes = getTavernRegexes();
    devLog(`[FilterGroup] [${operationId}] 获取到 ${allRegexes.length} 个总规则`);

    // 创建更新ID的Set以提高查找性能
    const updateIdSet = new Set(regexIdsToUpdate);

    // 批量更新状态
    let actualUpdatedCount = 0;
    allRegexes.forEach(regex => {
      if (updateIdSet.has(regex.id)) {
        regex.enabled = enableState;
        actualUpdatedCount++;
      }
    });

    devLog(`[FilterGroup] [${operationId}] 实际更新数量: ${actualUpdatedCount}`);

    if (actualUpdatedCount === 0) {
      console.warn(`[FilterGroup] [${operationId}] 没有找到匹配的规则进行状态更新`);
      window.alert(`没有找到需要${actionName}的规则，可能已被其他操作修改。`);
      return false;
    }

    // 单次写回操作
    devLog(`[FilterGroup] [${operationId}] 正在应用状态更新到存储...`);
    await replaceTavernRegexes(allRegexes, {});
    devLog(`[FilterGroup] [${operationId}] 存储更新完成`);

    const operationDuration = performance.now() - operationStartTime;

    // 操作完成报告
    devLog(`[FilterGroup] [${operationId}] ======= 批量${actionName}完成报告 =======`);
    devLog(`[FilterGroup] [${operationId}] 分组名称: ${groupName}`);
    devLog(`[FilterGroup] [${operationId}] 操作耗时: ${operationDuration.toFixed(2)}ms`);
    devLog(`[FilterGroup] [${operationId}] 预期更新: ${regexIdsToUpdate.length} 个`);
    devLog(`[FilterGroup] [${operationId}] 实际更新: ${actualUpdatedCount} 个`);
    devLog(`[FilterGroup] [${operationId}] 目标状态: ${enableState ? '启用' : '禁用'}`);
    devLog(`[FilterGroup] [${operationId}] 更新规则详情:`, regexNamesToUpdate);
    devLog(`[FilterGroup] [${operationId}] ================================`);

    // 移除加载状态
    removeLoadingState($loadingIndicator, operationId);

    // 第三步：智能UI更新 - 更新分组标题统计信息
    updateGroupStatusAfterBatchOperation(groupName, areaKey, $groupHeader, operationId);

    // 触发全局状态更新事件
    if (window.dispatchEvent) {
      const eventDetail = {
        operationId,
        action: `batchUpdate${enableState ? 'Enable' : 'Disable'}Group`,
        groupName,
        areaKey,
        updatedCount: actualUpdatedCount,
        updatedIds: regexIdsToUpdate,
        updatedNames: regexNamesToUpdate,
        newState: enableState,
        duration: operationDuration
      };

      window.dispatchEvent(new CustomEvent('regexGroupBatchUpdated', {
        detail: eventDetail
      }));

      devLog(`[FilterGroup] [${operationId}] 已触发分组状态更新完成事件`);
    }

    // 延迟刷新整体UI，确保状态同步
    setTimeout(() => {
      devLog(`[FilterGroup] [${operationId}] 开始全局UI刷新...`);
      if (typeof applyAllUIStates === 'function') {
        applyAllUIStates().then(() => {
          devLog(`[FilterGroup] [${operationId}] 全局UI刷新完成`);
        }).catch(error => {
          console.error(`[FilterGroup] [${operationId}] 全局UI刷新失败:`, error);
        });
      }
    }, 200);

    return true;

  } catch (error) {
    const errorDetails = {
      operationId,
      groupName,
      areaKey,
      enableState,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    };

    console.error(`[FilterGroup] [${operationId}] ======= 批量${actionName}失败报告 =======`);
    console.error(`[FilterGroup] [${operationId}] 错误详情:`, errorDetails);
    console.error(`[FilterGroup] [${operationId}] 完整错误对象:`, error);
    console.error(`[FilterGroup] [${operationId}] ================================`);

    // 移除加载状态
    removeLoadingState($loadingIndicator, operationId);

    // 用户友好的错误提示
    let userMessage = `批量${actionName}分组"${groupName}"失败`;
    if (error.message.includes('getTavernRegexes') || error.message.includes('replaceTavernRegexes')) {
      userMessage += '：核心功能不可用，请刷新页面后重试';
    } else {
      userMessage += `：${error.message}`;
    }

    window.alert(`${userMessage}\n\n操作ID: ${operationId}\n详细信息请查看浏览器控制台`);

    return false;
  } finally {
    window.batchOperationInProgress = false;
    devLog(`[FilterGroup] [${operationId}] 批量${actionName}流程结束`);
  }
}

// 新增：批量操作后更新分组状态显示
function updateGroupStatusAfterBatchOperation(groupName, areaKey, $groupHeader, operationId) {
  devLog(`[FilterGroup] [${operationId}] 正在更新分组状态显示...`);

  try {
    // 重新获取分组规则状态
    const groupRegexes = getRegexesByGroupName(groupName, areaKey);
    const enabledCount = groupRegexes.filter(regex => regex.enabled).length;
    const totalCount = groupRegexes.length;

    // 更新分组标题中的统计信息
    const statusText = totalCount > 0 ? ` (${enabledCount}/${totalCount})` : ` (${totalCount})`;
    $groupHeader.find('span').first().text(groupName + statusText);

    devLog(`[FilterGroup] [${operationId}] 分组状态更新完成: ${groupName} ${statusText}`);

  } catch (error) {
    console.error(`[FilterGroup] [${operationId}] 更新分组状态显示失败:`, error);
  }
}

function getRegexesByGroupName(groupName, areaKey) {
  try {
    // 获取所有正则表达式数据
    const allRegexes = getTavernRegexes();
    const regexMap = new Map(allRegexes.map(regex => [regex.id, regex]));

    // 获取配置
    const config = config_CONFIG.AREAS[areaKey];
    if (!config) {
      console.error(`[FilterGroup] 无效的区域键: ${areaKey}`);
      return [];
    }

    // 获取所有DOM元素（不管是否可见）
    const $list = $(config.listSelector);
    const $allItems = $list.find(config.itemSelector);

    devLog(`[FilterGroup] 找到 ${$allItems.length} 个规则项，正在筛选分组 "${groupName}"`);

    const groupRegexes = [];

    // 遍历所有规则项，不受可见性影响
    $allItems.each(function () {
      const $item = $(this);
      const itemId = $item.attr('id');

      // 提取规则名称
      const scriptName = extractScriptNameFromItem($item, config.nameSelector, config.isRegexType);

      if (scriptName) {
        // 检测分组
        const detectedGroupName = detectGroupFromScriptName(scriptName);

        // 规范化分组名称：null 表示未分组
        const normalizedDetectedGroup = detectedGroupName || "未分组";
        const normalizedTargetGroup = groupName || "未分组";

        // 如果属于目标分组（支持未分组的匹配）
        if (normalizedDetectedGroup === normalizedTargetGroup) {
          const regex = regexMap.get(itemId);
          if (regex) {
            groupRegexes.push({
              id: itemId,
              name: scriptName,
              enabled: regex.enabled,
              regex: regex
            });
            devLog(`[FilterGroup] 找到匹配项: ${scriptName} -> 分组: ${normalizedDetectedGroup}`);
          }
        }
      }
    });

    devLog(`[FilterGroup] 分组 "${groupName}" 包含 ${groupRegexes.length} 个规则`);
    return groupRegexes;

  } catch (error) {
    console.error('[FilterGroup] 获取分组规则时出错:', error);
    return [];
  }
}

// 新增：提取脚本名称的辅助函数
function extractScriptNameFromItem($item, nameSelector, isRegexType) {
  try {
    let $nameElement = $item.find(nameSelector);
    if ($nameElement.length === 0) {
      if (isRegexType) {
        const regexSelectors = [
          ".regex_script_name",
          ".name",
          "div.flexGrow",
          "div:first",
        ];
        for (const selector of regexSelectors) {
          $nameElement = $item.find(selector);
          if ($nameElement.length > 0) break;
        }
      } else {
        const scriptSelectors = [
          ".script-name",
          ".name",
          ".script-title",
          "div:first",
        ];
        for (const selector of scriptSelectors) {
          $nameElement = $item.find(selector);
          if ($nameElement.length > 0) break;
        }
      }
    }
    if ($nameElement.length > 0) {
      return $nameElement.text().trim();
    }
  } catch (e) {
    console.error("提取脚本名称出错:", e);
  }
  return null;
}

// 新增：从脚本名称检测分组的辅助函数（修复逻辑错误）
function detectGroupFromScriptName(scriptName) {
  if (!scriptName || typeof scriptName !== 'string') return null;

  // 按优先级顺序匹配分组模式
  const match = scriptName.match(config_CONFIG.GROUP_PREFIX_REGEX);

  if (match) {
    // 按优先级返回匹配的分组名：
    // 1. 【中文全角括号】
    // 2. [英文半角括号]
    // 3. 连字符前缀-
    const groupName = match[1] || match[2] || match[3];

    if (groupName && groupName.trim()) {
      devLog(`[FilterGroup] 文件名 "${scriptName}" 解析到分组: "${groupName}"`);
      return groupName.trim();
    }
  }

  // 如果没有匹配到任何分组模式，返回 null，由调用者决定如何处理
  devLog(`[FilterGroup] 文件名 "${scriptName}" 没有匹配到分组模式，归入未分组`);
  return null;
}

// 更新选择统计
function updateSelectionStats($modal) {
  const totalCount = $modal.find('input[type="checkbox"]').length;
  const selectedCount = $modal.find('input[type="checkbox"]:checked').length;

  $modal.find('#selected-count').text(selectedCount);
  $modal.find('#total-count').text(totalCount);
}

// 绑定模态窗口事件
function bindModalEvents($modal, groupRegexes, areaKey, groupName) {
  const modalId = `modal_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

  devLog(`[FilterGroup] [${modalId}] 开始绑定模态窗口事件...`);

  // 关闭模态窗口的统一函数
  function closeModal() {
    devLog(`[FilterGroup] [${modalId}] 执行关闭模态窗口...`);

    try {
      $modal.animate({ opacity: 0 }, 250, function () {
        devLog(`[FilterGroup] [${modalId}] 移除模态窗口DOM...`);
        $modal.remove();

        // 强制清理动态添加的CSS
        $('#modal-responsive-styles').remove();

        devLog(`[FilterGroup] [${modalId}] 模态窗口关闭完成`);
      });
    } catch (error) {
      console.error(`[FilterGroup] [${modalId}] 关闭模态窗口时出错:`, error);
      // 强制移除
      $modal.remove();
      $('#modal-responsive-styles').remove();
    }
  }

  // 点击遮罩层关闭（增强判断逻辑）
  $modal.on('click', function (e) {
    // 确保点击的是遮罩层本身，而不是内容区域
    if (e.target === this || $(e.target).hasClass('modal-overlay')) {
      devLog(`[FilterGroup] [${modalId}] 用户点击遮罩层，关闭模态窗口`);
      closeModal();
    }
  });

  // 点击关闭按钮和取消按钮
  $modal.find('.modal-close, .btn-cancel').on('click', function (e) {
    e.stopPropagation();
    const buttonType = $(this).hasClass('modal-close') ? '关闭按钮' : '取消按钮';
    devLog(`[FilterGroup] [${modalId}] 用户点击${buttonType}，关闭模态窗口`);
    closeModal();
  });

  // 批量选择操作（增强错误处理）
  $modal.find('.batch-select-all').on('click', function (e) {
    e.stopPropagation();
    try {
      devLog(`[FilterGroup] [${modalId}] 执行全选操作`);
      $modal.find('input[type="checkbox"]').prop('checked', true);
      updateSelectionStats($modal);
    } catch (error) {
      console.error(`[FilterGroup] [${modalId}] 全选操作失败:`, error);
    }
  });

  $modal.find('.batch-select-none').on('click', function (e) {
    e.stopPropagation();
    try {
      devLog(`[FilterGroup] [${modalId}] 执行全不选操作`);
      $modal.find('input[type="checkbox"]').prop('checked', false);
      updateSelectionStats($modal);
    } catch (error) {
      console.error(`[FilterGroup] [${modalId}] 全不选操作失败:`, error);
    }
  });

  $modal.find('.batch-invert').on('click', function (e) {
    e.stopPropagation();
    try {
      devLog(`[FilterGroup] [${modalId}] 执行反选操作`);
      $modal.find('input[type="checkbox"]').each(function () {
        $(this).prop('checked', !$(this).prop('checked'));
      });
      updateSelectionStats($modal);
    } catch (error) {
      console.error(`[FilterGroup] [${modalId}] 反选操作失败:`, error);
    }
  });

  // 确定按钮 - 应用变更（大幅增强错误处理和日志记录）
  $modal.find('.btn-confirm').on('click', async function (e) {
    e.stopPropagation();

    const $confirmBtn = $(this);
    const originalText = $confirmBtn.text();
    const operationId = `confirm_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

    devLog(`[FilterGroup] [${operationId}] 开始执行确定操作...`);

    try {
      $confirmBtn.text('处理中...').prop('disabled', true);

      // 收集变更信息
      const changes = [];
      $modal.find('input[type="checkbox"]').each(function () {
        const $checkbox = $(this);
        const regexId = $checkbox.closest('.regex-item').data('regex-id');
        const currentState = $checkbox.prop('checked');
        const originalState = $checkbox.data('original-state');

        if (currentState !== originalState) {
          changes.push({
            id: regexId,
            newState: currentState,
            originalState: originalState
          });
        }
      });

      devLog(`[FilterGroup] [${operationId}] 收集到 ${changes.length} 个状态变更`);

      if (changes.length === 0) {
        devLog(`[FilterGroup] [${operationId}] 没有检测到状态变更，直接关闭`);
        closeModal();
        return;
      }

      devLog(`[FilterGroup] [${operationId}] 变更详情:`, changes);

      // 执行批量状态变更
      devLog(`[FilterGroup] [${operationId}] 开始应用状态变更...`);
      const success = await applyRegexStateChanges(changes);

      if (success) {
        devLog(`[FilterGroup] [${operationId}] 精细化管理操作成功完成`);

        // 更新外部分组的批量开关状态
        try {
          updateGroupBatchSwitchState(areaKey, groupName);
          devLog(`[FilterGroup] [${operationId}] 分组状态同步完成`);
        } catch (syncError) {
          console.error(`[FilterGroup] [${operationId}] 分组状态同步失败:`, syncError);
          // 不阻断主流程
        }

        closeModal();

        // 刷新UI
        setTimeout(() => {
          devLog(`[FilterGroup] [${operationId}] 开始刷新UI...`);
          if (typeof applyAllUIStates === 'function') {
            applyAllUIStates().then(() => {
              devLog(`[FilterGroup] [${operationId}] UI刷新完成`);
            }).catch(uiError => {
              console.error(`[FilterGroup] [${operationId}] UI刷新失败:`, uiError);
            });
          } else {
            console.warn(`[FilterGroup] [${operationId}] applyAllUIStates 函数不可用`);
          }
        }, 100);
      } else {
        console.error(`[FilterGroup] [${operationId}] 应用状态变更失败`);
        window.alert('操作失败，请重试。');
      }

    } catch (error) {
      console.error(`[FilterGroup] [${operationId}] 精细化管理操作失败:`, error);
      console.error(`[FilterGroup] [${operationId}] 错误堆栈:`, error.stack);
      window.alert(`操作失败: ${error.message}\n\n操作ID: ${operationId}\n请查看控制台获取详细信息。`);
    } finally {
      $confirmBtn.text(originalText).prop('disabled', false);
      devLog(`[FilterGroup] [${operationId}] 确定操作流程结束`);
    }
  });

  devLog(`[FilterGroup] [${modalId}] 模态窗口事件绑定完成`);
}

// 应用正则表达式状态变更
async function applyRegexStateChanges(changes) {
  try {
    const allRegexes = getTavernRegexes();
    const regexMap = new Map(allRegexes.map(regex => [regex.id, regex]));

    let modifiedCount = 0;
    for (const change of changes) {
      const regex = regexMap.get(change.id);
      if (regex) {
        regex.enabled = change.newState;
        modifiedCount++;
      }
    }

    if (modifiedCount > 0) {
      await replaceTavernRegexes(allRegexes, {});
      devLog(`[FilterGroup] 成功更新 ${modifiedCount} 个正则表达式的状态。`);
      return true;
    }

    return false;
  } catch (error) {
    console.error('[FilterGroup] 应用状态变更失败:', error);
    return false;
  }
}

// 更新分组批量开关的状态（保持状态同步）
function updateGroupBatchSwitchState(areaKey, groupName) {
  try {
    const config = config_CONFIG.AREAS[areaKey];
    const $list = $(config.listSelector);

    // 查找对应的分组
    $list.find('.script-group-header').each(function () {
      const $header = $(this);
      const headerGroupName = $header.find('span').text().split(' (')[0];

      if (headerGroupName === groupName) {
        const $groupContent = $header.next('.script-group-content');
        const $visibleItems = $groupContent.find('.regex-script-label:visible');

        // 检查分组内所有规则的状态
        let enabledCount = 0;
        let totalCount = 0;

        $visibleItems.each(function () {
          const $item = $(this);
          const isEnabled = !$item.find('.disable_regex').prop('checked');
          if (isEnabled) enabledCount++;
          totalCount++;
        });

        // 更新分组标题中的统计信息
        const statusText = totalCount > 0 ? ` (${enabledCount}/${totalCount})` : ` (${totalCount})`;
        $header.find('span').text(groupName + statusText);

        devLog(`[FilterGroup] 更新分组 "${groupName}" 状态: ${enabledCount}/${totalCount} 已启用`);
        return;
      }
    });
  } catch (error) {
    console.error('[FilterGroup] 更新分组批量开关状态失败:', error);
  }
}

function initializeUnifiedUI() {
  if (window.unifiedUIInitialized) return;

  try {
    window.unifiedUIInitialized = !0;
    devLog("[FilterGroup]正在初始化统一UI处理模块...");

    // 添加批量操作完成后的状态同步监听器
    window.addEventListener('regexBatchOperationCompleted', function (event) {
      devLog('[FilterGroup] 批量操作完成，正在同步状态...', event.detail);
      // 延迟一点时间确保UI已更新
      setTimeout(() => {
        // 这里可以添加额外的状态同步逻辑
        devLog('[FilterGroup] 状态同步完成');
      }, 500);
    });

    (function addControlIcons() {
      devLog("[FilterGroup] 开始为各区域添加控制图标...");

      for (const [areaKey, config] of Object.entries(config_CONFIG.AREAS)) {
        try {
          devLog(`[FilterGroup] 处理区域: ${areaKey}`);
          devLog(`[FilterGroup] 标题选择器: ${config.titleSelector}`);

          const $titleElem = $(config.titleSelector);
          devLog(`[FilterGroup] 找到标题元素数量: ${$titleElem.length}`);

          if (0 !== $titleElem.length) {
            addFilterIcon(
              $titleElem,
              areaKey,
              getFilterState,
              updateFilterIcon,
              applyUIState,
              capitalizeFirstLetter
            );
            addGroupIcons(
              $titleElem,
              areaKey,
              getGroupingEnabledState,
              updateGroupIcon,
              applyUIState
            );
            addRefreshIcon($titleElem, areaKey, applyAllUIStates);
            // 新增：为局部正则脚本添加移动到全局的按钮
            addMoveToGlobalIcon($titleElem, areaKey, applyAllUIStates);
          } else if (areaKey === "scoped-regex") {
            // 如果找不到标题元素，但是是局部正则脚本区域，使用备用方案
            console.warn(`[FilterGroup] 局部正则脚本区域未找到标题元素，使用备用操作栏`);
            createMoveToGlobalActionBar();
          }
        } catch (error) {
          console.error(`[FilterGroup]初始化区域 ${areaKey} 的控制图标时出错:`, error);
        }
      }

      devLog("[FilterGroup] 控制图标添加完成");
    })();

    (function setupEventListeners() {
      try {
        if ("function" == typeof eventMakeFirst &&
          "undefined" != typeof tavern_events &&
          tavern_events.SETTINGS_UPDATED) {
          eventMakeFirst(tavern_events.SETTINGS_UPDATED, function () {
            devLog("[FilterGroup]设置已更新，正在刷新UI...");
            applyAllUIStates().then(() => {
              devLog("[FilterGroup]UI刷新完成");
            }).catch((error) => {
              console.error("[FilterGroup]UI刷新失败:", error);
            });
          });
        }
      } catch (error) {
        console.error("[FilterGroup]设置事件监听器时出错:", error);
      }
    })();

    // 延迟应用UI状态，提高浏览器兼容性
    setTimeout(() => {
      applyAllUIStates().catch((error) => {
        console.error("[FilterGroup]初始化UI状态时出错:", error);
      });
    }, 100);

  } catch (error) {
    console.error("[FilterGroup]初始化统一UI时出错:", error);
    window.unifiedUIInitialized = false;
  }
}
function getGroupingEnabledState(areaKey) {
  return "true" === localStorage.getItem(config_CONFIG.getStorageKey(areaKey));
}
function getFilterState(areaKey) {
  return parseInt(
    localStorage.getItem(`regexFilter${capitalizeFirstLetter(areaKey)}`) || "0"
  );
}
function capitalizeFirstLetter(string) {
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
function resetAreaUI(areaKey) {
  const config = config_CONFIG.AREAS[areaKey],
    $list = $(config.listSelector);
  return (
    0 !== $list.length &&
    ((function removeGrouping(areaKey) {
      const config = config_CONFIG.AREAS[areaKey],
        $list = $(config.listSelector);
      if (0 === $list.length) return !1;
      const $groupHeaders = $list.find(".script-group-header"),
        $groupContents = $list.find(".script-group-content");
      if (0 === $groupHeaders.length || 0 === $groupContents.length) return !1;
      const $items = $list.find(config.itemSelector);
      return (
        $items.each(function () {
          $(this).css("width", "").find(".drag-handle").show();
        }),
        $list.append($items),
        $groupHeaders.remove(),
        $groupContents.remove(),
        (function restoreSortable(areaKey) {
          const config = config_CONFIG.AREAS[areaKey],
            $list = $(config.listSelector);
          $list.length &&
            ($list
              .find(".drag-handle, " + config.itemSelector)
              .off("mousedown.groupui dragstart.groupui"),
              $list.find(".drag-handle").show());
        })(areaKey),
        !0
      );
    })(areaKey),
      $list.find(config.itemSelector).css("display", ""),
      !0)
  );
}
function updateFilterIcon(areaKey) {
  const $icon = $(`#${areaKey}-filter-icon`);
  if (0 === $icon.length) return;
  const config = [
    { class: "fa-filter", color: "", title: "显示全部 (点击切换到仅显示开启)" },
    {
      class: "fa-check-circle",
      color: "",
      title: "仅显示开启 (点击切换到仅显示隐藏)",
    },
    {
      class: "fa-times-circle",
      color: "",
      title: "仅显示隐藏 (点击切换到显示全部)",
    },
  ][getFilterState(areaKey)];
  $icon.attr("class", "").addClass("fa-solid " + config.class),
    $icon.attr("title", config.title);
}
function updateGroupIcon(areaKey) {
  const isGroupEnabled = getGroupingEnabledState(areaKey),
    $groupIcon = $(`#${areaKey}-group-icon`);
  $groupIcon.length > 0 &&
    ($groupIcon.attr(
      "class",
      "fa-solid " + (isGroupEnabled ? "fa-folder-open" : "fa-folder")
    ),
      $groupIcon.attr("title", isGroupEnabled ? "关闭分组" : "开启分组"));
  const $toggleAll = $(`#${areaKey}-toggle-all`);
  $toggleAll.length > 0 &&
    (isGroupEnabled
      ? $toggleAll.css("display", "")
      : $toggleAll.css("display", "none"));
}
function applyUIState(areaKey) {
  if (!config_CONFIG.AREAS[areaKey])
    return devLog(`[FilterGroup]区域 ${areaKey} 配置不存在，跳过处理`), !1;
  if (window.batchOperationInProgress)
    return devLog("[FilterGroup]批量操作进行中，暂时跳过UI刷新"), !1;
  const config = config_CONFIG.AREAS[areaKey],
    isGroupEnabled = getGroupingEnabledState(areaKey),
    filterState = getFilterState(areaKey);
  resetAreaUI(areaKey);
  const $list = $(config.listSelector);
  if (0 === $list.length) return !1;
  return (
    $list.find(config.itemSelector).each(function () {
      const $item = $(this);
      let isEnabled;
      (isEnabled = config.isRegexType
        ? !$item.find(".disable_regex").prop("checked")
        : "none" !== $item.find(".script-toggle-on").css("display")),
        0 === filterState
          ? $item.css("display", "")
          : 1 === filterState
            ? $item.css("display", isEnabled ? "" : "none")
            : 2 === filterState && $item.css("display", isEnabled ? "none" : "");
    }),
    isGroupEnabled &&
    (function applyGrouping(areaKey) {
      const config = config_CONFIG.AREAS[areaKey],
        $list = $(config.listSelector);
      if (0 === $list.length) return !1;
      const $items = $list.find(config.itemSelector);
      if (0 === $items.length) return !1;
      const groups = groupScripts(
        $items,
        config.nameSelector,
        config.isRegexType
      );
      if (!groups || 0 === groups.length) return !1;
      return (
        !!groups.some((group) => null !== group.name) &&
        ($list.children().detach(),
          groups.forEach((group) => {
            const groupName = null === group.name ? "未分组" : group.name,
              isFolded = (function getGroupFoldState(
                areaKey,
                groupName,
                defaultState = !0
              ) {
                const storageKey = `script_group_fold_state_${areaKey}`,
                  foldStates = JSON.parse(
                    localStorage.getItem(storageKey) || "{}"
                  );
                return groupName in foldStates
                  ? foldStates[groupName]
                  : defaultState;
              })(areaKey, groupName, !0),
              visibleItems = group.items.filter(
                (item) => "none" !== $(item).css("display")
              );
            let statusText;
            if (config.isRegexType) {
              const totalCount = group.items.length,
                enabledCount = group.items.filter(
                  (item) => !$(item).find(".disable_regex").prop("checked")
                ).length;
              statusText = `(${enabledCount}/${totalCount})`;
            } else statusText = `(${visibleItems.length})`;
            const $groupHeader = $(
              `\n            <div class="script-group-header" style="${config_CONFIG.STYLES.groupHeaderStyle
              }${0 === visibleItems.length ? "display: none;" : ""
              }">\n                <span>${groupName} ${statusText}</span>\n                <i class="fa-solid ${isFolded ? "fa-angle-down" : "fa-angle-up"
              } group-toggle-icon"></i>\n            </div>\n        `
            ),
              $groupContent = $(
                `\n            <div class="script-group-content" style="${config_CONFIG.STYLES.groupContentStyle
                }${isFolded || 0 === visibleItems.length ? " display: none;" : ""
                }">\n            </div>\n        `
              );
            $list.append($groupHeader),
              $list.append($groupContent),
              config.isRegexType &&
              (function createBatchActionButtons(
                $groupHeader,
                $groupContent
              ) {
                const $actionButtons = $(
                  '\n        <div class="group-actions" style="display: inline-flex; margin-left: auto; margin-right: 42px;">\n            <i class="fa-solid fa-cog batch-manage" style="margin-right: 12px; cursor: pointer;" title="管理"></i>\n            <i class="fa-solid fa-check-circle batch-enable" style="margin-right: 12px; cursor: pointer;" title="批量开启"></i>\n            <i class="fa-solid fa-times-circle batch-disable" style="margin-right: 12px; cursor: pointer;" title="批量关闭"></i>\n            <i class="fa-solid fa-trash-alt batch-delete" style="cursor: pointer;" title="批量删除"></i>\n        </div>\n    '
                );

                $groupHeader.find("span").after($actionButtons);
                const currentGroupName = $groupHeader.find("span").text().split(" (")[0];

                // 新增：管理按钮事件处理
                addDebouncedClickHandler(
                  $actionButtons.find(".batch-manage"),
                  function () {
                    createRegexManagementModal(currentGroupName, $groupContent, areaKey);
                  },
                  { operationName: "打开精细化管理", minDelay: 100 }
                );

                return (
                  $groupHeader.closest(".regex-scripts-area").length,
                  addDebouncedClickHandler(
                    $actionButtons.find(".batch-enable"),
                    function () {
                      if (
                        window.confirm(
                          "确定要批量开启该分组下的所有正则表达式吗？"
                        )
                      ) {
                        // 修复：使用优化的批量状态变更函数
                        const currentGroupName = $groupHeader.find("span").text().split(" (")[0];
                        devLog(`[FilterGroup] 开始批量开启分组 "${currentGroupName}" 的所有规则...`);
                        batchUpdateRegexStateByGroup(currentGroupName, areaKey, true, $groupHeader);
                      }
                    },
                    { operationName: "批量开启正则表达式", minDelay: 200 }
                  ),
                  addDebouncedClickHandler(
                    $actionButtons.find(".batch-disable"),
                    function () {
                      if (
                        window.confirm(
                          "确定要批量关闭该分组下的所有正则表达式吗？"
                        )
                      ) {
                        // 修复：使用优化的批量状态变更函数
                        const currentGroupName = $groupHeader.find("span").text().split(" (")[0];
                        devLog(`[FilterGroup] 开始批量关闭分组 "${currentGroupName}" 的所有规则...`);
                        batchUpdateRegexStateByGroup(currentGroupName, areaKey, false, $groupHeader);
                      }
                    },
                    { operationName: "批量关闭正则表达式", minDelay: 200 }
                  ),
                  addDebouncedClickHandler(
                    $actionButtons.find(".batch-delete"),
                    function () {
                      if (
                        window.confirm(
                          "确定要批量删除该分组下的所有正则表达式吗？此操作不可撤销！"
                        )
                      ) {
                        // 修复BUG：不再依赖DOM可见性，直接从数据源获取分组规则
                        const currentGroupName = $groupHeader.find("span").text().split(" (")[0];
                        devLog(`[FilterGroup] 开始批量删除分组 "${currentGroupName}" 的所有规则...`);

                        // 使用优化的批量删除函数
                        batchDeleteRegexesByGroup(currentGroupName, areaKey, $groupHeader);
                      }
                    },
                    { operationName: "批量删除正则表达式", minDelay: 200 }
                  ),
                  $actionButtons
                );
              })($groupHeader, $groupContent),
              group.items.forEach(($item) => {
                $item.css("width", "97%").find(".drag-handle").hide(),
                  $groupContent.append($item);
              }),
              addGroupHeaderClickHandler($groupHeader, areaKey);
          }),
          (function fixSortableAfterGrouping(areaKey) {
            const config = config_CONFIG.AREAS[areaKey],
              $list = $(config.listSelector);
            $list.length &&
              ($list.find(".drag-handle").hide(),
                $list
                  .find(
                    ".drag-handle, .script-group-header, .script-group-content, " +
                    config.itemSelector
                  )
                  .off("mousedown.groupui dragstart.groupui")
                  .on("mousedown.groupui dragstart.groupui", function (e) {
                    return e.stopPropagation(), e.preventDefault(), !1;
                  }));
          })(areaKey),
          !0)
      );
    })(areaKey),
    !0
  );
}
function applyAllUIStates() {
  return window.batchOperationInProgress
    ? (devLog("[FilterGroup]批量操作进行中，暂时跳过UI刷新"),
      Promise.resolve(!1))
    : isUIDebouncing()
      ? (devLog("[FilterGroup]UI操作已在进行中，已添加到操作队列"),
        (function queueOperation(name, callback, options = {}) {
          const { priority = 10 } = options,
            operation = { name, callback, priority, timestamp: Date.now() };
          let inserted = !1;
          for (let i = 0; i < operationQueue.length; i++)
            if (operationQueue[i].priority > priority) {
              operationQueue.splice(i, 0, operation), (inserted = !0);
              break;
            }
          return (
            inserted || operationQueue.push(operation),
            isDebouncing || processNextOperation(),
            Promise.resolve(!1)
          );
        })(
          "刷新UI",
          () =>
            refreshAllAreas().then(
              () => (devLog("[FilterGroup]队列刷新完成"), !0)
            ),
          { priority: 5 }
        ))
      : debounceUI(async () => await refreshAllAreas(), {
        operationName: "应用所有UI状态",
        minDelay: 500,
      });
}
async function refreshAllAreas() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const promises = [];
  for (const areaKey in config_CONFIG.AREAS) {
    applyUIState(areaKey) ||
      promises.push(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(applyUIState(areaKey));
          }, 500);
        })
      );
  }
  return (
    await Promise.all(promises),
    devLog("[FilterGroup]所有区域UI刷新完成"),
    !0
  );
}
const unifiedUI = {
  initialize: initializeUnifiedUI,
  applyState: applyUIState,
  applyAllStates: applyAllUIStates,
  resetUI: resetAreaUI,
  isDebouncing: isUIDebouncing,
};
$(function () {
  setTimeout(function () {
    !(function initializeAllUI() {
      devLog("[FilterGroup]正在初始化统一UI组件..."),
        initializeUnifiedUI();
    })();
  }, 500);
}),
  (window.unifiedUI = unifiedUI),
  $(function () {
    devLog("正则脚本统一UI管理已初始化");

    // 性能优化和新功能验证
    devLog("[FilterGroup] 已启用以下功能:");
    devLog("- ✓ 优化的批量操作性能");
    devLog("- ✓ 分组内规则精细化管理");
    devLog("- ✓ 模态窗口交互界面");
    devLog("- ✓ 状态同步机制");
    devLog("- ✓ 修复分组折叠时管理功能无法使用的BUG");
    devLog("- ✓ 响应式设计优化，适配移动端");
    devLog("- ✓ 局部正则脚本批量移至全局功能 (V9修复版)");
    devLog("- ✓ 修复逻辑判断错误，使用正确的API属性");
    devLog("- ✓ 修复UI样式问题，与系统主题完美适配");

    // 兼容性检查
    if (typeof getTavernRegexes === 'function' && typeof replaceTavernRegexes === 'function') {
      devLog("[FilterGroup] ✓ 核心API兼容性检查通过");
    } else {
      console.warn("[FilterGroup] ⚠ 核心API可能不可用，某些功能可能受限");
    }

    // 设备检测
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    if (isMobile) {
      devLog("[FilterGroup] ✓ 检测到移动设备，已启用移动端优化");
    }
  });
