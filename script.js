const foodDatabase = [];

function searchFood() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const resultSection = document.getElementById('food-result');
    
    const food = foodDatabase.find(item => item.name.toLowerCase() === searchInput);
    
    if (food) {
        resultSection.innerHTML = `
            <p>食品名: ${food.name}</p>
            <p>カロリー: ${food.calories} kcal</p>
            <p>タンパク質: ${food.protein} g</p>
            <p>脂質: ${food.fat} g</p>
            <p>炭水化物: ${food.carbs} g</p>
        `;
    } else {
        resultSection.innerHTML = '<p>該当する食品が見つかりませんでした。</p>';
    }
}

function addFood() {
    const name = document.getElementById('food-name').value;
    const calories = parseFloat(document.getElementById('food-calories').value);
    const protein = parseFloat(document.getElementById('food-protein').value);
    const fat = parseFloat(document.getElementById('food-fat').value);
    const carbs = parseFloat(document.getElementById('food-carbs').value);
    
    if (name && !isNaN(calories) && !isNaN(protein) && !isNaN(fat) && !isNaN(carbs)) {
        const newFood = { name, calories, protein, fat, carbs };
        foodDatabase.push(newFood);
        alert('食品データが追加されました！');
        clearInputFields();
    } else {
        alert('すべてのフィールドに正しい値を入力してください。');
    }
}

function clearInputFields() {
    document.getElementById('food-name').value = '';
    document.getElementById('food-calories').value = '';
    document.getElementById('food-protein').value = '';
    document.getElementById('food-fat').value = '';
    document.getElementById('food-carbs').value = '';
}