const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbynv4pAZjYMvAXuKDp0W0yh7O7FB8XIIJGh833OoUoMr0IRjpxGuT1mxDWYcZE8UNYKLA/exec";
// 1. 設定 24 題的資料清單
const questions = [
    { //泰國大象
        video: "Q1MZgYDNDt0", 
        filename: "1.MP4",
        type:"Low_risk_Real",
        is_real: true, 
        is_trap: false,
        nowtag: "真實影片。", 
        answer: "真實影片" 
    },
    { //泰妍與潤兒
        video: "cd9qcIsPzTs", 
        filename: "2.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        answer: "真實影片" 
    }, 
    { //開鐵門
        video: "pOrxmVtXs3Q?feature=share", 
        filename: "3.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        answer: "真實影片" 
    },
    { //入浴球
        video: "WRJULWdcMFo?feature=share", 
        filename: "4.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        answer: "AI生成影片" 
    },
    { //農夫
        video: "ba4L-5oEcDQ?feature=share", 
        filename: "5.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        answer: "真實影片" 
    },
    { //戰地記者
        video: "xf_59NZCb18", 
        filename: "6.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        answer: "真實影片" 
    },

    { //川普大谷翔平
        video: "La3vRnyydPE", 
        filename: "7.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        answer: "真實影片" 
    },
    { //地震
        video: "WZHA-Dvd7Uw?feature=share", 
        filename: "8.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        answer: "真實影片" 
    },
    { //炸湯圓
        video: "0SpJ-obzsdU", 
        filename: "9.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        answer: "真實影片" 
    },
    { //楊紫瓊 陷阱題：真實影片但AI提示說有AI訊號
        video: "J8q_fnID_Wc", 
        filename: "10.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊", 
        answer: "真實影片" 
    },
    { //小女孩訪談 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "FIJDrHyVHBk?feature=share", 
        filename: "11.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        answer: "AI生成影片" 
    },
    { //木耳飲廣告
        video: "ZBZVUIXga1M", 
        filename: "12.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        answer: "AI生成影片" 
    },
    { //AI醫生
        video: "OGiGXQ2xVtY", 
        filename: "13.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        answer: "AI生成影片" 
    },
    { //seedance 
        video: "fJDarSdF1OI",
        filename: "14.MP4", 
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        answer: "AI生成影片" 
    },
    { //韓國女生 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "kgtkkwXzAqU", 
        filename: "15.MP4", 
        type:"Low_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        answer: "AI生成影片" 
    },

    { //警察送飯 陷阱題：AI影片但AI提示說沒有AI訊號
        video: "Z1yYjyfL0-o?feature=share", 
        filename: "16.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        answer: "AI生成影片" 
    },
    { //川普打架 陷阱題：AI影片但AI提示說沒有AI訊號
        video: "tSmOS-ENtuI?feature=share", 
        filename: "17.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        answer: "AI生成影片" 
    },
    { //戰爭逃難
        video: "AZMSS9TK8Gw?feature=share", 
        filename: "18.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊", 
        answer: "AI生成影片" 
    },
    { //炸大樓
        video: "Z68PsWLu4Go?feature=share", 
        filename: "19.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        answer: "AI生成影片" 
    },
    { //知恩晚安
        video: "zz5k9l2Y9F0", 
        filename: "20.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        answer: "AI生成影片" 
    },
    { //假川普 陷阱題：真實影片但AI提示說有AI訊號
        video: "kL4tZPCnZxo", 
        filename: "21.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊。", 
        answer: "真實影片" 
    },
    { //高市與川普
        video: "u-UmfJ2nGFU", 
        filename: "22.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        answer: "真實影片" 
    },
    { //龍捲風 陷阱題：真實影片但AI提示說有AI訊號
        video: "l6bM2KrhChM", 
        filename: "23.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊。", 
        answer: "真實影片" 
    },
    { //海嘯
        video: "23UdqvvkrcI", 
        filename: "24.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        answer: "AI生成影片" 
    }
    
];

function prepareExperimentalFlow(allData) {
    // 1. 分類：陷阱題 vs 普通題
    const trapQuestions = allData.filter(q => q.is_trap === true);
    const normalQuestions = allData.filter(q => q.is_trap !== true);

    // 2. 隨機打亂「普通題」內部順序
    for (let i = normalQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [normalQuestions[i], normalQuestions[j]] = [normalQuestions[j], normalQuestions[i]];
    }

    // 3. 隨機打亂「陷阱題」內部順序
    for (let i = trapQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [trapQuestions[i], trapQuestions[j]] = [trapQuestions[j], trapQuestions[i]];
    }

    // 4. 定義 8 個固定且非連續的位置 (索引從 0 開始)
    // 第 3, 6, 10, 13, 16, 19, 22, 24 題
    const trapPositions = [2, 5, 9, 12, 15, 18, 21, 23]; 

    // 5. 依序將陷阱題插入普通題陣列中
    trapPositions.forEach((pos, index) => {
        if (trapQuestions[index]) {
            normalQuestions.splice(pos, 0, trapQuestions[index]);
        }
    });

    return normalQuestions;
}

// 執行準備流程並蓋掉原本的陣列
const finalSequence = prepareExperimentalFlow(questions);
questions.length = 0;
questions.push(...finalSequence);
// --- 隨機邏輯結束 ---

// prepareExperimentalFlow(questions);

let timerInterval;
let lastTrustScore = 4; // 預設起始信任值
let currentHintType = ""; 
let currentIndex = 0;
const userId = "Experimenter_" + crypto.randomUUID().split('-')[0].toUpperCase() + "_" + Date.now();
// 產出的 ID 會像這樣：User_B8A29F1C_1714470000000;
function timeIsUp() {
    // 1. 強制讓第二階段答案 = 第一階段答案 (如果沒選)
    const p1Selected = document.querySelector('input[name="p1_choice"]:checked');
    const p2Options = document.getElementsByName('p2_choice');
    let alreadyChecked = false;
    
    for(let opt of p2Options) { if(opt.checked) alreadyChecked = true; }

    if (!alreadyChecked && p1Selected) {
        console.log("時間到，自動帶入初步判斷...");
        const target = document.querySelector(`input[name="p2_choice"][value="${p1Selected.value}"]`);
        if (target) target.checked = true;
    }

    // 1b. 若信任程度未選，自動選 4 分（普通）
    const trustAlreadyChecked = document.querySelector('input[name="trust-a"]:checked');
    if (!trustAlreadyChecked) {
        console.log("時間到，自動帶入信任程度 4 分...");
        const defaultTrust = document.querySelector('input[name="trust-a"][value="4"]');
        if (defaultTrust) defaultTrust.checked = true;
    }

    // 2. 顯示強制提醒
    alert("30 秒作答時間已到！系統將自動記錄並進入評分階段。");

    // 3. 【核心跳轉邏輯】直接切換分頁，不經過按鈕點擊
    if (v2) v2.src = v2.src;
    clearInterval(timerInterval);

    const step3TabEl = document.querySelector('#step-3-tab');
    if (step3TabEl) {
        new bootstrap.Tab(step3TabEl).show();
    }
    window.scrollTo(0, 0);
}
// 2. 切換邏輯
document.querySelector('#go-to-step-2').addEventListener('click', () => {
    if(!document.querySelector('input[name="p1_choice"]:checked')) return alert("請先選擇答案");
    // 1. 停止第一階段影片播放
    if (v1) {
        v1.src = "";
    }
    new bootstrap.Tab(document.querySelector('#step-2-tab')).show();
    window.scrollTo(0,0);
    const nextBtn = document.querySelector('#go-to-step-3');
    if (nextBtn) {
        nextBtn.disabled = true; // 鎖定
        nextBtn.innerText = "請閱讀標籤 (5s)..."; // 視覺提示
        
        setTimeout(() => {
            nextBtn.disabled = false; // 5秒後解鎖
            nextBtn.innerText = "前往第三步驟"; // 恢復文字
        }, 5000); // 5000 毫秒 = 5 秒
    }
    // 3. 【核心修改】在此時才啟動 30 秒倒數
    startCountdown(30);
});

document.querySelector('#go-to-step-3').addEventListener('click', () => {
    if(!document.querySelector('input[name="p2_choice"]:checked')) return alert("請先選擇答案");
    if(!document.querySelector('input[name="trust-a"]:checked')) return alert("請評分信任程度");
    // 1. 停止第二階段影片播放
    if (v2) {
        v2.src = "";
    }
    
    // 2. 停止倒數計時器
    clearInterval(timerInterval);
    new bootstrap.Tab(document.querySelector('#step-3-tab')).show();
    window.scrollTo(0,0);
});

// 3. 提交本題數據並換題
document.querySelector('#submitButton').addEventListener('click', async function () {
    const trust = document.querySelector('input[name="trust-a"]:checked');

    this.disabled = true;
    this.querySelector('.spinner-border').classList.remove('d-none');
    const q = questions[currentIndex];
    const payload = {
        user_id: userId,
        order_no: currentIndex + 1,
    
        // ⭐ 核心識別（用這個分析）
        filename: q.filename,          // "1.MP4"
    
        // ⭐ 條件變數（實驗設計）
        is_trap: q.is_trap || false,
        is_real: q.is_real,
        type: q.type,                 // "Low_risk_Real"
    
        // ⭐ 操弄變數
        hint_type: currentHintType,   // Cognition / Perception / Contrast
    
        // ⭐ 使用者反應
        p1: document.querySelector('input[name="p1_choice"]:checked').value,
        p2: document.querySelector('input[name="p2_choice"]:checked').value,
        trust: trust.value,
    
        // ⭐ 正確答案（之後可以直接算 accuracy）
        answer: q.answer
    };

    await new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', APPS_SCRIPT_URL);
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.onloadend = resolve;
        xhr.send(JSON.stringify({ action: "submit_step", ...payload }));
    });
    lastTrustScore = parseInt(trust.value);

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderNextQuestion();
        this.disabled = false;
        this.querySelector('.spinner-border').classList.add('d-none');
    } else {
    
    // 隱藏所有的階段分頁
    // 更新進度顯示為 24/24
    const idxElement = document.getElementById('current-idx-text');
    if(idxElement) idxElement.innerText = questions.length;
    // 隱藏 tab 標籤列
    document.getElementById('experimentTab').style.display = 'none';
    // 切換到問卷分頁
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('show', 'active'));
    const demoTab = document.getElementById('demographics');
    if (demoTab) {
        demoTab.classList.add('show', 'active');
        window.scrollTo(0, 0);
    }
    }
});


function startCountdown(seconds) {
    let timeLeft = seconds;
    const timerDisplay = document.getElementById('timer-text');
    
    clearInterval(timerInterval);
    timerDisplay.innerText = timeLeft;
    timerDisplay.classList.remove('text-danger', 'text-blink');

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        // 剩餘 10 秒時變色提醒
        if (timeLeft <= 10) {
            timerDisplay.classList.add('text-danger');
        }
        // 最後 5 秒開始閃爍
        if (timeLeft <= 5) {
            timerDisplay.classList.add('text-blink');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeIsUp();
        }
    }, 1000);
}

function renderNextQuestion() {
    const q = questions[currentIndex];
    let displayHint = "";

    // --- 完全給現行標籤 ---
    if (lastTrustScore < 3) {
        displayHint = q.nowtag;
        currentHintType = "Nowtag";
    } else if (lastTrustScore > 5) {
        displayHint = q.nowtag;
        currentHintType = "Nowtag";
    } else {
        displayHint = q.nowtag;
        currentHintType = "Nowtag";
    }

    // --- 更新 UI 文字 ---
    const idxElement = document.getElementById('current-idx-text');
    if(idxElement) idxElement.innerText = currentIndex + 1;

    const hintElement = document.getElementById('ai-hint-text');
    if(hintElement) hintElement.innerText = "AI輔助標籤：" + displayHint;

    const ansElement = document.getElementById('correct-answer-text');
    if(ansElement) ansElement.innerText = "正確答案：" + q.answer;

    // --- 更新影片 ---
    const v1 = document.getElementById('v1');
    const v2 = document.getElementById('v2');
    if (v1 && v2) {
        const videoUrl = `https://www.youtube.com/embed/${q.video}`;
    
        v1.src = videoUrl;
        v2.src = videoUrl;
    }

    // --- 重置計時器狀態 ---
    clearInterval(timerInterval);

    // 重置選項
    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);

    // 跳回第一階段 Tab
    const firstTabEl = document.querySelector('#step-1-tab');
    if(firstTabEl) {
        new bootstrap.Tab(firstTabEl).show();
    }
    window.scrollTo(0,0);
}
const noneCheckbox = document.getElementById('videotool9');
    const otherCheckboxes = document.querySelectorAll('input[name="tool"]:not(#videotool9)');
  
    // 勾選「無使用經驗」時，取消所有其他選項
    noneCheckbox.addEventListener('change', function () {
      if (this.checked) {
        otherCheckboxes.forEach(cb => cb.checked = false);
      }
    });
  
    // 勾選任何其他選項時，取消「無使用經驗」
    otherCheckboxes.forEach(cb => {
      cb.addEventListener('change', function () {
        if (this.checked) {
          noneCheckbox.checked = false;
        }
      });
    });
document.getElementById('demographicForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerText = "提交中...";
    
    const formData = new FormData(this);
    const demoPayload = {
        user_id:    userId,
        gender:     formData.get('gender'),
        age:        formData.get('age'),
        education:  formData.get('edu'),
        AIvideo_tool: formData.getAll('tool').join(','),  // 複選，逗號分隔
        AIvideo_time:      formData.get('time'),           // 第5題
        AIvideo_frequency: formData.get('frequency'),      // 第6題
    };

    try {
        await new Promise(resolve => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', APPS_SCRIPT_URL);
            xhr.setRequestHeader('Content-Type', 'text/plain');
            xhr.onloadend = resolve;
            xhr.send(JSON.stringify({ action: "submit_demographics", ...demoPayload }));
        });
        alert("實驗完成！感謝您的貢獻。");
        document.body.innerHTML = '<div style="text-align:center;margin-top:20vh"><h1>實驗結束，感謝您的參與！</h1></div>';
    } catch (err) {
        alert("提交失敗，請檢查網路連線");
        submitBtn.disabled = false;
    }
});
// 初始啟動
renderNextQuestion();