// ==UserScript==
// @name         军火库项目助手
// @icon         data:image/png;base64,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
// @author       老班长
// @namespace    https://greasyfork.org/zh-CN
// @version      Release-1.5.2
// @description  军火库项目助手，用于协助排版/打印/解析处理
// @match        https://ziyuanyetnt.jiaoyanyun.com
// @match        https://stc-arsenal.github.io/*
// @match        https://stc-arsenal.github.io/
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @license      GPL-3.0
// @downloadURL  https://stc-arsenal.github.io/user_script.user.js
// @updateURL    https://stc-arsenal.github.io/user_script.user.js
// ==/UserScript==

(function() {
    'use strict';
    const host = window.location.hostname;
    function main (){
        var startTime = new Date().getTime();
        var div22 = document.querySelector("body > div.loading-container")
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");
        var button4 = document.createElement("button");
        var button5 = document.createElement("button");
        var button3b = document.createElement("button");
        var paragraph = document.createElement("button");
        var loading = document.querySelector("body > div.loading-container")

        var number = 0
        var q = 0
        var answer = 0
        // 定义试卷
        var query = location.search;
        var analysis = 0

        var jiexiurl = "https://app-pub.jiaoyanyun.com/console-pub/v1/search/resource";

        // CSS：处理预览界面
        var style1 = document.createElement('style');
        style1.type = 'text/css';
        style1.textContent = '.maskDiv {display:none!important} .talqs, .talqs * {border: none;} .print-wrapper.transition[data-v-5cbc9a76] {margin: 0px 0px 15px 0px;} .print-question-body.is-analyze .talqs .talqs_analyze_group, .print-question-body.is-analyze .talqs .talqs_analyze_single {padding:0}.talqs .talqs_options .talqs_options_index {width:30px!important;}  .talqs .talqs_options .talqs_options_columns_4 .talqs_options_columns_item {width:23.5%!important} td {padding-left: 5px;padding-right: 5px;} .print-question-index{height: 40px;background-color: rgb(0, 116, 252);color: rgb(255, 255, 255)!important;border-radius: 9px 0px;margin: 3px auto;right: 6px;position: relative;text-align: center;width:40px!important;font-size:20px!important;line-height: 2!important;}.print-title[data-v-5cbc9a76] {page-break-after: avoid !important;padding: 8px 0px!important;width:100%;height:52px;border-bottom:solid #b9d9fe 4px;display:flex;top:0px;position:relative;page-break-inside:avoid!important}.talqs_analyze_group{background-color:#ffffff!important}#app, body, html{background-color:#ffffff!important}.print-wrap{background-color:#fff!important}.print-title-index[data-v-b5955b8c]{position:relative;display:flex;margin:4px 0;padding:2px 0 4px 18px;width:90px;border-top-right-radius:0;border-top-left-radius:8px;text-wrap:nowrap;font-weight:700;font-size:32px;font-family:HarmonyOS Sans SC;line-height:54px;border-bottom:4px solid #b9d9fe;font-feature-settings:"tnum","tnum";font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:tabular-nums;font-variant-position:normal;pointer-events:auto;text-size-adjust:100%;-webkit-font-smoothing:antialiased}.print-title-body[data-v-b5955b8c],.print-title-index[data-v-b5955b8c]{box-sizing:border-box;height:60px;border-bottom-right-radius:0;border-bottom-left-radius:0;background-color:#e8f3ff;color:#005ad0;user-select:text;white-space-collapse:collapse;-webkit-tap-highlight-color:transparent}.print-title-body[data-v-b5955b8c]{position:absolute;top:12px;left:75px;z-index:1;display:flex;padding-top:2px;padding-right:12px;width:fit-content;border-top-right-radius:8px;border-top-left-radius:0;text-align:left;text-wrap:wrap;letter-spacing:normal;font-weight:700;font-style:normal;font-size:32px;font-family:HarmonyOS Sans SC;line-height:54px;border-bottom:4px solid #b9d9fe;font-feature-settings:"kern" 0;font-kerning:none;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:tabular-nums;font-variant-position:normal;text-decoration-skip-ink:none;text-size-adjust:100%;word-break:break-word;writing-mode:horizontal-tb;-webkit-font-smoothing:antialiased}.app-main{font-family:HarmonyOS Sans SC;.print-question-body.is-analyze .talqs .talqs_panel.watermark-wrap{padding-right:0;max-width:100%}}}';
        document.head.appendChild(style1);

        // CSS：处理交互功能界面
        var style2 = document.createElement('style');
        style2.type = 'text/css';
        style2.textContent = '.button{border:none;color:white;padding:5px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:14px;margin:4px 2px;transition-duration:0.4s;cursor:pointer;border-radius:9px;}.button1{background-color:#3f92ff;border:2px solid #4CAF50}.button1:hover{background-color:#4CAF50;color:white}'
        document.head.appendChild(style2);

        // CSS：处理打印内容
        var style4 = document.createElement('style');
        style4.type = 'text/css';
        style4.textContent = '@media print and (color) { .print-paragraph{font-weight:300!important;font-size:21px!important;line-height:1.8!important} audio{display:none;} *{-webkit-print-color-adjust: exact!important;print-color-adjust: exact!important}} @media print{ *{visibility: visible!important;opacity:1!important} .no-print{display:none!important} .maskDiv {display:none!important} @page{margin: 15mm 10mm 10mm 10mm!important;}.talqs img {line-height: 2.3em!important}.talqs{font-size:20px !important;line-height:2 !important}.print-title[data-v-faad0e22]{font-weight:700;font-size: 40px!important;line-height: 32px!important};}'
        document.head.appendChild(style4);

        // CSS：处理print-tool
        var style5 = document.createElement('style');
        style5.type = 'text/css';
        style5.textContent = '.print-tool[data-v-b5955b8c] {width:225px}'
        document.head.appendChild(style5);

        console.log("【教研云解析修复】开始运行");

        function loadEnd() {div22.style.display = 'none';}

        window.moveUp = function moveUp(button) {
            const currentDiv = button.closest('.print-wrapper');
            const previousDiv = currentDiv.previousElementSibling;
            if (previousDiv && previousDiv.classList.contains('movable')) {
                currentDiv.style.transform = 'translateY(-110%)';
                previousDiv.style.transform = 'translateY(110%)';
                setTimeout(() => {
                    currentDiv.style.transform = '';
                    previousDiv.style.transform = '';
                    currentDiv.parentNode.insertBefore(currentDiv, previousDiv);
                }, 300);
            }
        }

        window.test = function test() {console.log(1)}
        window.addEventListener('load', test);

        window.moveDown = function moveDown(button) {
            const currentDiv = button.closest('.print-wrapper');
            const nextDiv = currentDiv.nextElementSibling;
            if (nextDiv && nextDiv.classList.contains('movable')) {
                currentDiv.style.transform = 'translateY(110%)';
                nextDiv.style.transform = 'translateY(-110%)';
                setTimeout(() => {
                    currentDiv.style.transform = '';
                    nextDiv.style.transform = '';
                    currentDiv.parentNode.insertBefore(nextDiv, currentDiv);
                }, 300);
            }
        }
        function doSomething() {
            var startTime2 = new Date().getTime();
            var title23 = document.title
            var newtitle23 = "【解析】" + title23
            document.title = newtitle23;

            for (var i = 0; i < 80; i++) {
                var element = document.querySelector("#print-body > div:nth-child(" + i + ") > div.print-question.is-default > div > div > div");
                var output = "#print-body > div:nth-child("+i+") > div.print-question.is-default > div > div.talqs > div > div > div > div.talqs_analyze.clearfix > div"
                var outputanswer = "#print-body > div:nth-child("+i+") > div.print-question.is-default > div > div.talqs > div > div > div > div.talqs_answer.clearfix > div"
                var yuanti = "#print-body > div:nth-child("+i+") > div.print-question.is-default > div"
                // 判断元素是否存在
                if (element) {
                    // 获取data-talqs-root的值
                    number = number +1
                    var value = element.getAttribute("data-talqs-root");
                    // 判断值是否存在
                    if (value) {
                        var data = {
                            "keyword": value,
                            "sources": [6],
                            "orgId": 1,
                            "page": 1,
                            "page_size": 40,
                            "periodId": 2,
                            "subjectId": 2
                        };
                        var post = JSON.stringify(data);
                        console.log(number+") 请求解析：" + value)

                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", jiexiurl, false);
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.onload = function() {
                            // 显示返回的结果中的"data.question.list[0].analysis"的内容
                            // var result = document.createElement("div");
                            // 解析返回的结果为JSON对象
                            var json = JSON.parse(this.responseText);
                            
                            // 处理答案

                            //    // ========答案开始======== \\
                            answer = json.data.question.list[0].answer[0];
                            //   \\ ========答案结束======== //

                            //   // ========解析开始======== \\
                            let analysis = json.data.question.list[0].analysis;

                            if (analysis !== null && Array.isArray(analysis)) {
                                // 正常单一解析
                                answer = json.data.question.list[0].answer[0];
                                analysis = json.data.question.list[0].analysis[0].replace(/<p><br\/>【详解】<br\/>/g, "").replace(/<p><br\/>/g, "");
                                var element1 = document.querySelector(outputanswer);
                                element1.innerHTML = answer;
                                MathJax.typeset([element1]);
                            } else if (json.data.question.list[0].childList[0]) {
                                // 解答题分项解析
                                let i = 0;let branch_number = 1
                                analysis = ""
                                while (json?.data?.question?.list?.[0]?.childList?.[i]?.analysis?.[0]) {
                                    analysis += json.data.question.list[0].childList[i].analysis[0].replace(/<p>/, "<p>（" + branch_number + "）")
                                    i++;
                                    branch_number++;
                                }
                            } else if (json.data.question.list[0].optionAnalysisList[0]){
                                analysis = json.data.question.list[0].optionAnalysisList[0].analysis[0].replace(/<p>/, "<p>"+json.data.question.list[0].optionAnalysisList[0].code+".");
                                //for (var tr = 1; tr < 5; tr++) {
                                if (json?.data?.question?.list?.[0]?.optionAnalysisList?.[1]?.analysis?.[0] ) {analysis += json.data.question.list[0].optionAnalysisList[1].analysis[0].replace(/<p>/, "<p>"+json.data.question.list[0].optionAnalysisList[1].code+".");}
                                if (json?.data?.question?.list?.[0]?.optionAnalysisList?.[2]?.analysis?.[0] ) {analysis += json.data.question.list[0].optionAnalysisList[2].analysis[0].replace(/<p>/, "<p>"+json.data.question.list[0].optionAnalysisList[2].code+".");}
                                if (json?.data?.question?.list?.[0]?.optionAnalysisList?.[3]?.analysis?.[0] ) {analysis += json.data.question.list[0].optionAnalysisList[3].analysis[0].replace(/<p>/, "<p>"+json.data.question.list[0].optionAnalysisList[3].code+".");}
                                if (json?.data?.question?.list?.[0]?.optionAnalysisList?.[4]?.analysis?.[0] ) {analysis += json.data.question.list[0].optionAnalysisList[3].analysis[0].replace(/<p>/, "<p>"+json.data.question.list[0].optionAnalysisList[4].code+".");}
                                //}
                            }

                            //   \\ ========解析结束======== //

                            var element0 = document.querySelector(output);
                            element0.innerHTML = analysis;
                            MathJax.typeset([element0]);


                        };
                        xhr.send(post);

                    }

                }
            }
            button1.innerHTML = "重新修复解析";
            var endTime2 = new Date().getTime();
            var executionTime2 = endTime2 - startTime2;
            console.log("已完成修复！总计 "+ number +" 题，用时 "+executionTime2+" ms")
            setTimeout(loadEnd, 800);

        };

        function fix() {
            div22.style.display = 'flex';
            setTimeout(doSomething, 500);
        }


        function bigpng(){
            const images = document.querySelectorAll('img');

            // 遍历每个图片元素并调整宽度
            images.forEach(image => {
                // 获取当前宽度
                const currentWidth = image.clientWidth;
                // 设置新的宽度
                image.style.width = `${currentWidth * 1.3}px`;
            });}

        function smallpng(){
            const images = document.querySelectorAll('img');

            // 遍历每个图片元素并调整宽度
            images.forEach(image => {
                // 获取当前宽度
                const currentWidth = image.clientWidth;
                // 设置新的宽度
                image.style.width = `${currentWidth / 1.3}px`;
            });}

        function removeOrigin(){
            var style3 = document.createElement('style');
            style3.type = 'text/css';
            style3.textContent = '.talqs_main.clearfix{display:none};.talqs{display:none!important}'
            document.head.appendChild(style3);
            button2.innerHTML = "原题已隐藏";
        }

        function addPaperClass(){
            const printBody = document.getElementById('print-body');
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `<div data-v-b5955b8c="" data-v-b6b3805c="" data-v-faad0e22="" class="print-wrapper transition is-default" style="margin: 0px 0px 15px;"><div data-v-b6b3805c="" data-v-b5955b8c="" class="print-paragraph" style="font-size:24px!important;width: 25%;display: inline-block;"><p>机密★启用前</p></div><div data-v-b6b3805c="" data-v-b5955b8c="" class="print-paragraph" style="font-size:24px!important;width: 51%;text-align: right;display: inline-block;!impor;!impo;!imp;!i;!i,;!i;!;!@;float: right;"><p>&nbsp; &nbsp; 试题类型 A</p></div></div>`;
            printBody.insertBefore(newDiv, printBody.firstChild);
            button4.innerHTML = "已添加";
        }

        function editable(){
            button5.innerHTML = "停止编辑内容";
            document.body.contentEditable = 'true';
            button5.removeEventListener("click", editable)
            button5.addEventListener("click", uneditable)
        }

        function uneditable(){
            document.body.contentEditable = 'false';
            button5.innerHTML = "编辑内容";
            button5.removeEventListener("click", uneditable)
            button5.addEventListener("click", editable)
        }

        function buttonA(){
            div22.style.display = 'flex!important';
            let paragraph = document.querySelector('p');
            var printTitleDiv = document.querySelector('.print-title');
            printTitleDiv.innerHTML = printTitleDiv.innerHTML.replace(/试卷/g, '试题').replace(/山东青岛.*区青岛/g, '青岛');
            // document.body.innerHTML = document.body.innerHTML.replace(/（　　）/g, '');
            // paragraph.innerHTML = paragraph.innerHTML.replace(/\(<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<\/span>\)/g, '');

            const printButton2 = document.querySelector("#app > div > div > div > div.print-head > div > div.print-head-left > div:nth-child(1)")
            const newDiv2 = document.createElement('div');
            newDiv2.style = "display:inline-block"
            // 设置新 div 的 HTML 内容
            newDiv2.innerHTML = `<div style="display: inline-block;">
            <style>
        .tooltip1 {
        background-color: #000; border: 2px solid #F2C811!important;}
        .tooltip {
            position: relative;
            display: inline-block;
            border: none;
            color: white;
            padding: 5px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
            margin: 4px 2px;
            transition-duration: 0.4s;
            cursor: pointer;
            border-radius: 9px;
        }
        .tooltip .tooltiptext {
            visibility: hidden;
            width: 250px;
            color: #000;
            text-align: center;
            border-radius: 5px;
            padding: 10px;
            position: absolute;
            z-index: 1;
            top: 100%;
            left: 50%;
            margin-left: -85px;
            opacity: 0;
            height: auto;
            transition: opacity 0.3s;
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(3px) saturate(50%);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
        .tooltip:hover .tooltiptext,.tooltip .tooltiptext:hover {
            visibility: visible;
            opacity: 1;}
        </style>
        <div class="tooltip tooltip1">
            <button style="font-size: 15px;display: inline-block;background-color: #000000;color: #F2C811;font-weight: bold;">[VIP] 军火库工具箱</button>
            <div class="tooltiptext"><p>Release 1.5.2</p><p>Developed By 老班长</p></div>
        </div></div>`;
            printButton2.insertBefore(newDiv2, printButton2.firstChild);

            var style3 = document.createElement('style');
            style3.type = 'text/css';
            style3.textContent = '.print-head .print-head-left .print-version-menu[data-v-faad0e22]{margin-left:100px!important}'
            document.head.appendChild(style3);

            button1.type = "button";
            button1.className = "button button1";
            button1.innerHTML = "修复解析";
            var element223 = document.querySelector("#app > div > div > div > div.print-head > div > div.print-head-left > div:nth-child(1) > div > div > div > div")
            element223.appendChild(button1);
            button1.addEventListener("click", fix);

            button2.type = "button";
            button2.className = "button button1";
            button2.innerHTML = "隐藏原题";
            var element224 = document.querySelector("#app > div > div > div > div.print-head > div > div.print-head-left > div:nth-child(1) > div > div > div > div")
            element224.appendChild(button2);
            button2.addEventListener("click", removeOrigin)

            button3.type = "button";
            button3.className = "button button1";
            button3.innerHTML = "扩大照片";
            var element226 = document.querySelector("#app > div > div > div > div.print-head > div > div.print-head-left > div:nth-child(1) > div > div > div > div")
            element226.appendChild(button3);
            button3.addEventListener("click", bigpng)


            button3b.type = "button";
            button3b.className = "button button1";
            button3b.innerHTML = "缩小照片";
            var element226b = document.querySelector("#app > div > div > div > div.print-head > div > div.print-head-left > div:nth-child(1) > div > div > div > div")
            element226b.appendChild(button3b);
            button3b.addEventListener("click", smallpng)

            button4.type = "button";
            button4.className = "button button1";
            button4.innerHTML = "保密级别";
            var element225 = document.querySelector("#app > div > div > div > div.print-head > div > div.print-head-left > div:nth-child(1) > div > div > div > div")
            element225.appendChild(button4);
            button4.addEventListener("click", addPaperClass)

            button5.type = "button";
            button5.className = "button button1";
            button5.innerHTML = "编辑内容";
            var element227 = document.querySelector("#app > div > div > div > div.print-head > div > div.print-head-left > div:nth-child(1) > div > div > div > div")
            element227.appendChild(button5);
            button5.addEventListener("click", editable)


            var endTime = new Date().getTime();
            var executionTime = endTime - startTime;
            console.log("【军火库项目助手】准备已完成！总计用时 " + executionTime + " ms");
            div22.style.display = 'none';
        }
        setTimeout(buttonA, 1500);
    }

    function login(){
        let user_script_check = document.querySelector("body > div > div.userjs")
        user_script_check.style = "display: none"
    }

    if (host === "ziyuanyetnt.jiaoyanyun.com") {
        main();
      } else if (host === "stc-arsenal.github.io") {
        login();
      }
})();
