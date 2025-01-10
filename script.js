// グローバル変数で選択されたジャンルを保持
let selectedGenres = [];

// アイテムデータ (追加・差し替えが容易)
const items = [
{ name: 'フシギダネ', image: './images/A1-001.png', quantity: 0, genre: ['♦', '最強の遺伝子 ミュウツー', '草'], disabled: false },
{ name: 'フシギソウ', image: './images/A1-002.png', quantity: 0, genre: ['♦♦', '最強の遺伝子 ミュウツー', '草'], disabled: false },
{ name: 'フシギバナ', image: './images/A1-003.png', quantity: 0, genre: ['♦♦♦', '最強の遺伝子 ミュウツー', '草'], disabled: false },
{ name: 'フシギバナex', image: './images/A1-004.png', quantity: 0, genre: ['♦♦♦♦', '最強の遺伝子 ミュウツー', '草'], disabled: false },
{ name: 'キャタピー', image: './images/A1-005.png', quantity: 0, genre: ['♦', '最強の遺伝子 ピカチュウ', '草'], disabled: false },
{ name: 'トランセル', image: './images/A1-006.png', quantity: 0, genre: ['♦', '最強の遺伝子 ピカチュウ', '草'], disabled: false },
{ name: 'バタフリー', image: './images/A1-007.png', quantity: 0, genre: ['♦♦♦', '最強の遺伝子 ピカチュウ', '草'], disabled: false },
{ name: 'ビードル', image: './images/A1-008.png', quantity: 0, genre: ['♦', '最強の遺伝子 ミュウツー', '草'], disabled: false },
{ name: 'コクーン', image: './images/A1-009.png', quantity: 0, genre: ['♦', '最強の遺伝子 ミュウツー', '草'], disabled: false },
{ name: 'スピアー', image: './images/A1-010.png', quantity: 0, genre: ['♦♦♦', '最強の遺伝子 ミュウツー', '草'], disabled: false },
{ name: 'ナゾノクサ', image: './images/A1-011.png', quantity: 0, genre: ['♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'クサイハナ', image: './images/A1-012.png', quantity: 0, genre: ['♦♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'ラフレシア', image: './images/A1-013.png', quantity: 0, genre: ['♦♦♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'パラス', image: './images/A1-014.png', quantity: 0, genre: ['♦', '最強の遺伝子 ピカチュウ', '草'], disabled: false },
{ name: 'パラセクト', image: './images/A1-015.png', quantity: 0, genre: ['♦♦', '最強の遺伝子 ピカチュウ', '草'], disabled: false },
{ name: 'コンパン', image: './images/A1-016.png', quantity: 0, genre: ['♦', '最強の遺伝子 ミュウツー', '草'], disabled: false },
{ name: 'モルフォン', image: './images/A1-017.png', quantity: 0, genre: ['♦♦', '最強の遺伝子 ミュウツー', '草'], disabled: false },
{ name: 'マダツボミ', image: './images/A1-018.png', quantity: 0, genre: ['♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'ウツドン', image: './images/A1-019.png', quantity: 0, genre: ['♦♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'ウツボット', image: './images/A1-020.png', quantity: 0, genre: ['♦♦♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'タマタマ', image: './images/A1-021.png', quantity: 0, genre: ['♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'ナッシー', image: './images/A1-022.png', quantity: 0, genre: ['♦♦♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'ナッシーex', image: './images/A1-023.png', quantity: 0, genre: ['♦♦♦♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'モンジャラ', image: './images/A1-024.png', quantity: 0, genre: ['♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'ストライク', image: './images/A1-025.png', quantity: 0, genre: ['♦', '最強の遺伝子 ミュウツー', '草'], disabled: false },
{ name: 'カイロス', image: './images/A1-026.png', quantity: 0, genre: ['♦♦', '最強の遺伝子 ミュウツー', '最強の遺伝子 リザードン', '最強の遺伝子 ピカチュウ', '草'], disabled: false },
{ name: 'モンメン', image: './images/A1-027.png', quantity: 0, genre: ['♦', '最強の遺伝子 ミュウツー', '最強の遺伝子 リザードン', '最強の遺伝子 ピカチュウ', '草'], disabled: false },
{ name: 'エルフーン', image: './images/A1-028.png', quantity: 0, genre: ['♦♦', '最強の遺伝子 ミュウツー', '最強の遺伝子 リザードン', '最強の遺伝子 ピカチュウ', '草'], disabled: false },
{ name: 'チュリネ', image: './images/A1-029.png', quantity: 0, genre: ['♦', '最強の遺伝子 ミュウツー', '最強の遺伝子 リザードン', '最強の遺伝子 ピカチュウ', '草'], disabled: false },
{ name: 'ドレディア', image: './images/A1-030.png', quantity: 0, genre: ['♦♦', '最強の遺伝子 ミュウツー', '最強の遺伝子 リザードン', '最強の遺伝子 ピカチュウ', '草'], disabled: false },
{ name: 'メェークル', image: './images/A1-031.png', quantity: 0, genre: ['♦', '最強の遺伝子 リザードン', '草'], disabled: false },
{ name: 'ゴーゴート', image: './images/A1-032.png', quantity: 0, genre: ['♦', '最強の遺伝子 リザードン', '草'], disabled: false },

	
];

// ローカルストレージにデータを保存
function saveToLocalStorage() {
    const itemsData = JSON.stringify(items);
    localStorage.setItem('items', itemsData);
}

// ローカルストレージからデータを読み込む
function loadFromLocalStorage() {
    const itemsData = localStorage.getItem('items');
    return itemsData ? JSON.parse(itemsData) : [];
}

// ボタンのクリックイベントを設定
function setupGenreButtons() {
    const buttons = document.querySelectorAll('#genre-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectedGenres = button.getAttribute('data-genres').split(',');
            renderItems(selectedGenres); // 選択されたジャンルでアイテムを再描画
        });
    });
}

// ページが読み込まれたらボタンにイベントリスナーを追加する
function addEventListenersToButtons() {
    const saveBtn = document.getElementById('saveBtn');
    const openInNewTabBtn = document.getElementById('openInNewTabBtn');

    // ボタンが存在するか確認してイベントを追加
    if (saveBtn && openInNewTabBtn) {
        saveBtn.addEventListener('click', saveAsImage);
        saveBtn.addEventListener('touchstart', saveAsImage);  // スマホ対応のためtouchstartを追加

        openInNewTabBtn.addEventListener('click', openInNewTab);
        openInNewTabBtn.addEventListener('touchstart', openInNewTab);  // スマホ対応のためtouchstartを追加
    }
}

// ページのDOMが完全に読み込まれたらイベントリスナーを設定
document.addEventListener('DOMContentLoaded', addEventListenersToButtons);

// アイテムが描画される前に、画像保存ボタンのイベントを設定
document.getElementById('saveBtn').addEventListener('click', saveAsImage);
document.getElementById('saveBtn').addEventListener('touchstart', saveAsImage);

// "新規タブで開く" ボタン
document.getElementById('openInNewTabBtn').addEventListener('click', openInNewTab);
document.getElementById('openInNewTabBtn').addEventListener('touchstart', openInNewTab);

// アイテムを表示する
function renderItems(selectedGenres = []) {
    const container = document.getElementById('item-container');
    container.innerHTML = ''; // 一度リセット

    // HTMLで指定されたジャンル順に表示するために、selectedGenresの順に処理
    selectedGenres.forEach(genre => {
        const genreDiv = document.createElement('div');
        genreDiv.classList.add('genre');
        genreDiv.innerHTML = `<h2>${genre}</h2>`;
        container.appendChild(genreDiv);

        // 選択されたジャンルに合致するアイテムを表示
        items.filter(item => item.genre.includes(genre)).forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.onerror = function() { this.src = './images/NoImage.png'; }; // エラー時に noimage.png を表示
            img.loading = 'lazy'; // 遅延読み込み
            img.onclick = () => toggleCover(item, itemDiv); // アイテムとアイテム要素を渡す

            const quantityInput = document.createElement('input');
            quantityInput.type = "number";
            quantityInput.value = item.quantity;
            quantityInput.min = 0;
            quantityInput.onchange = function() { updateQuantity(item, this.value); }; // アイテム自体を渡す

            const namePara = document.createElement('p');
            namePara.textContent = item.name;

            itemDiv.appendChild(img);
            itemDiv.appendChild(namePara);
            itemDiv.appendChild(quantityInput);

            // カバーの追加処理
            addCover(itemDiv, item);

            genreDiv.appendChild(itemDiv);
        });
    });
}



// カバーの追加処理
function addCover(itemDiv, item) {
    // 既存のカバーを削除
    const existingCovers = itemDiv.querySelectorAll('.cover, .black, .blue, .green');
    existingCovers.forEach(cover => cover.remove());

    if (item.disabled || item.quantity == 1) {
        // 無効化されているとき：黒カバーとクロス印を表示
        const coverDiv = document.createElement('div');
        coverDiv.classList.add('black', 'cover');
        itemDiv.appendChild(coverDiv);
    } else if (item.quantity <= 0) {
        // 数量が0のとき：青カバーを表示
        const coverDiv = document.createElement('div');
        coverDiv.classList.add('blue');
        itemDiv.appendChild(coverDiv);
    } else if (item.quantity >= 2) {
        // 数量が2以上のとき：緑カバーを表示
        const coverDiv = document.createElement('div');
        coverDiv.classList.add('green');
        itemDiv.appendChild(coverDiv);
    }
}

// 数量の更新
function updateQuantity(item, value) {
    item.quantity = parseInt(value);
    saveToLocalStorage(); // ローカルストレージに保存
    renderItems(selectedGenres); // 数量変更後に再描画（選択されたジャンルを維持）
}

// 画像に×印を表示・非表示
function toggleCover(item, itemDiv) {
    item.disabled = !item.disabled; // アイテムの有効・無効を切り替え

    saveToLocalStorage(); // 状態の変更を保存
    renderItems(selectedGenres); // 変更を反映（選択されたジャンルを維持）

    // カバーの状態だけを更新
    addCover(itemDiv, item);
}

// 画像として保存
function saveAsImage(event) {
    event.preventDefault();  // デフォルトのタッチ動作を抑制

    // 1920pxの幅に合わせるため、まずアイテムコンテナのスタイルを確認
    const container = document.getElementById('item-container');
    container.style.width = '1920px';  // 横幅を1920pxに固定

    html2canvas(container, {
        width: 1920,  // 出力するキャンバスの幅を1920pxに
        scale: 1      // 画像を拡大せずにそのままキャプチャ
    }).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'screenshot.png';
        link.click();
    });
}


// 新しいタブで開く
function openInNewTab() {
    const container = document.getElementById('item-container');
    container.style.width = '1920px';  // 横幅を1920pxに固定
	
    html2canvas(container, {
        width: 1920,  // 統一された幅
        scale: 1      // スケールを指定して拡大しない
    }).then((canvas) => {
        const imgDataUrl = canvas.toDataURL('image/png');
        const newTab = window.open();
        if (newTab) {
            newTab.document.write(`<img src="${imgDataUrl}" alt="Screenshot">`);
            newTab.document.title = "Screenshot";
        } else {
            alert('ポップアップがブロックされました。設定を確認してください。');
        }
    });
}


// ページ読み込み時にアイテムを表示し、ローカルストレージからデータをロード
document.addEventListener('DOMContentLoaded', () => {
    const savedItems = loadFromLocalStorage();

    if (savedItems.length > 0) {
        savedItems.forEach((savedItem, index) => {
            // アイテムが既存のデータと一致するかチェック
            const matchingItem = items.find(item => item.name === savedItem.name);

            if (matchingItem) {
                // 一致する場合は、ローカルストレージのデータで上書き
                matchingItem.quantity = savedItem.quantity;
                matchingItem.disabled = savedItem.disabled;
            } else {
                // 一致するアイテムがない場合は新しいアイテムとして追加
                items.push(savedItem);
            }
        });
    }
	
    setupGenreButtons(); // ボタンのイベントリスナーを設定

    // デフォルトで1つ目のボタンを選択
    const firstButton = document.querySelector('#genre-buttons button');
    if (firstButton) {
        firstButton.click(); // 最初のボタンをクリックして自動選択
    }
});

// 使い方ボタンとモーダルの要素を取得
const howToUseBtn = document.getElementById('howToUseBtn');
const modal = document.getElementById('howToUseModal');
const closeModal = document.getElementById('closeModal');

// ボタンが押されたらモーダルを表示
howToUseBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// 閉じるボタンが押されたらモーダルを非表示
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// モーダル外をクリックした場合も閉じる
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
