
const dietDatabase = {
    balanced: {
        male: {
            title: "Programme Balanced Nutrition (Male)",
            weeks: {
                "Week 1": [
                    { day: "Monday", breakfast: "3 eggs omelette, 1 cup oats with whole milk & honey", lunch: "200g chicken breast with 2 cup basmati rice & salad", snack: "1 toast with turkey, cheese & avocado" },
                    { day: "Tuesday", breakfast: "2 slices bread with peanut butter & 1 large banana", lunch: "3 beef patties with 2 baked potatoes", snack: "1 yogurt (5%) with plenty of walnuts & honey" },
                    { day: "Wednesday", breakfast: "3 scrambled eggs in 2 slices whole-grain bread", lunch: "Pasta with beef mince & plenty of cheese", snack: "1 handful almonds & 2 dried figs" },
                    { day: "Thursday", breakfast: "Oat pancakes (2 eggs, oats, 1 banana)", lunch: "salmon fillet with 1.5 cup quinoa", snack: "2 rice cakes with lots of tahini & honey" },
                    { day: "Friday", breakfast: "1 large bowl yogurt (5%) with granola & fruit", lunch: "Lentils with 1 piece of feta & 2-3 boiled eggs", snack: "1 protein bar & 1 glass milk" },
                    { day: "Saturday", breakfast: "Toast with 2 eggs, cheese & bacon", lunch: "beef rib steak with plenty of mashed potatoes", snack: "Smoothie: Milk, 1 banana & 1 tbsp peanut butter" },
                    { day: "Sunday", breakfast: "3 fried eggs with 2 slices rustic bread", lunch: "Cheat Meal (Pizza/Burger)", snack: "1 large handful mixed nuts" }
                ],
                "Week 2": [
                    { day: "Monday", breakfast: "3 boiled eggs, 2 slices whole-grain bread with cream cheese", lunch: "turkey fillet with 2 baked sweet potatoes", snack: "1 banana & 1 handful pistachios" },
                    { day: "Tuesday", breakfast: "Bowl with yogurt (5%), oats, cocoa and honey", lunch: "Pasta with 2 tins of tuna, corn and mayonnaise", snack: "2 crackers with double cheese and turkey" },
                    { day: "Wednesday", breakfast: "Omelette (3 eggs) with mushrooms and cheese", lunch: "2 pork chops with 1.5 cup rice", snack: "Smoothie: Milk, 1 apple, cinnamon & oats" },
                    { day: "Thursday", breakfast: "2 slices bread with tahini, honey and chia seeds", lunch: "baked chicken with peas and 2 potatoes", snack: "1 tub cottage cheese with 1 pear" },
                    { day: "Friday", breakfast: "3 fried eggs with 1 sausage and 2 slices bread", lunch: "Chickpeas (creamy) with 1 cup rice & olives", snack: "1 handful walnuts & a little dark chocolate" },
                    { day: "Saturday", breakfast: "French Toast (3 slices) with honey and cinnamon", lunch: "beef in tomato sauce with plenty of orzo", snack: "1 toast with lots of peanut butter" },
                    { day: "Sunday", breakfast: "Scrambled eggs (3 eggs) with avocado & bread", lunch: "Cheat Meal", snack: "1 sesame bar or 1 piece cake" }
                ],
                "Week 3": [
                    { day: "Monday", breakfast: "3 eggs omelette with spinach, 1 cup oats", lunch: "Chicken stir-fry with noodles & vegetables", snack: "1 yogurt (5%) with granola & raisins" },
                    { day: "Tuesday", breakfast: "2 large rusks with feta, tomato & oil", lunch: "3 chicken patties with sweet potato mash", snack: "1 handful cashews & 1 orange" },
                    { day: "Wednesday", breakfast: "Smoothie: 2 scoop protein, banana, oats", lunch: "Beef fillet (250g) with quinoa & broccoli", snack: "2 rice cakes with cream cheese & salmon" },
                    { day: "Thursday", breakfast: "3 boiled eggs & 1 large sesame bread ring", lunch: "Penne with chicken, heavy cream & mushrooms", snack: "1 handful sunflower seeds & 2 prunes" },
                    { day: "Friday", breakfast: "Yogurt (5%) with peanut butter, honey & oats", lunch: "Lentils with 2 tins of tuna & rusk", snack: "1 cereal bar & 1 glass milk" },
                    { day: "Saturday", breakfast: "3 scrambled eggs with bacon & bread", lunch: "Risotto with mushrooms, parmesan & truffle oil", snack: "1 banana with 1 tbsp tahini" },
                    { day: "Sunday", breakfast: "Oat pancakes with lots of honey", lunch: "Cheat Meal", snack: "1 handful mixed nuts" }
                ],
                "Week 4": [
                    { day: "Monday", breakfast: "3 eggs omelette with fries", lunch: "2 Beef patties in burger", snack: "Yogurt (5%) with almonds & spoon sweet" },
                    { day: "Tuesday", breakfast: "2 slices bread with avocado, 2 poached eggs & cheese", lunch: "Chicken curry with coconut milk & 2 cup rice", snack: "1 handful nuts & 1 banana" },
                    { day: "Wednesday", breakfast: "Oat bowl with milk, cocoa, honey & hazelnuts", lunch: "Spaghetti Carbonara (with 2 eggs & parmesan)", snack: "2 slices bread with turkey & cheese" },
                    { day: "Thursday", breakfast: "3 boiled eggs, 2 slices bread, graviera cheese", lunch: "Salmon baked with 2 potatoes", snack: "Smoothie: Milk, peanut butter, honey" },
                    { day: "Friday", breakfast: "Pancakes with cottage cheese & lots of honey", lunch: "Baked giant beans with 2 sausages & bread", snack: "1 protein bar & 1 juice" },
                    { day: "Saturday", breakfast: "3 fried eggs with 2 rusks & olives", lunch: "1 large portion Pastitsio or Moussaka", snack: "1 handful cashews & apricots" },
                    { day: "Sunday", breakfast: "Hearty breakfast with eggs & bread", lunch: "Cheat Meal", snack: "1 fruit & nuts" }
                ]
            }
        },
        female: {
            title: "Programme Balanced Nutrition (Female)",
            weeks: {
                "Week 1": [
                    { day: "Monday", breakfast: "2 eggs omelette, 1/2 cup oats with milk 2% & honey", lunch: "130g chicken breast with 1 cup basmati rice & salad", snack: "1 toast whole-grain with turkey, light cheese & 1/4 avocado" },
                    { day: "Tuesday", breakfast: "1 slice whole-grain bread with peanut butter & 1 small banana", lunch: "2 beef patties lean with 1 baked potato", snack: "1 yogurt (2%) with 3 walnuts & a little honey" },
                    { day: "Wednesday", breakfast: "2 scrambled eggs in 1 slice whole-grain bread", lunch: "Whole-grain pasta with beef mince & a little cheese", snack: "10 almonds & 1 dried fig" },
                    { day: "Thursday", breakfast: "Oat pancakes (egg white, oats, half banana)", lunch: "Fillet sea bream with 1/2 cup quinoa & greens", snack: "2 rice cakes with a little tahini & honey" },
                    { day: "Friday", breakfast: "1 bowl yogurt (2%) with 2 tbsp granola & fruit", lunch: "Lentils with 30g light feta & 1 boiled egg", snack: "1 small protein bar & a little milk" },
                    { day: "Saturday", breakfast: "Toast whole-grain with boiled egg & light cheese", lunch: "Beef fillet with a little mashed potatoes & salad", snack: "Smoothie with almond milk, half banana & a little peanut butter" },
                    { day: "Sunday", breakfast: "2 fried eggs with 1 slice bread", lunch: "Cheat Meal (with measure)", snack: "1 handful nuts" }
                ],
                "Week 2": [
                    { day: "Monday", breakfast: "2 boiled eggs, 1 slice whole-grain bread with cream cheese light", lunch: "turkey fillet with 1 sweet potato baked", snack: "1 kiwi & 10 pistachios" },
                    { day: "Tuesday", breakfast: "Bowl with yogurt (2%), 2 tbsp oats & a little cocoa", lunch: "Whole-grain pasta with tuna & corn", snack: "2 rye crackers with 1 slice light cheese" },
                    { day: "Wednesday", breakfast: "Omelette (2 eggs) with mushrooms and a little cheese", lunch: "pork chop (lean) with 1/2 cup rice", snack: "Smoothie: Milk 2%, 1 apple & cinnamon" },
                    { day: "Thursday", breakfast: "1 slice bread with tahini, honey and chia seeds", lunch: "Chicken baked with peas & 1 potato", snack: "1 tub cottage cheese with pear" },
                    { day: "Friday", breakfast: "2 fried eggs with 1 slice whole-grain bread", lunch: "Chickpeas with 1/2 cup rice & olives", snack: "5-6 walnuts & a little dark chocolate" },
                    { day: "Saturday", breakfast: "1 slice French Toast (with egg white) with honey", lunch: "beef in tomato sauce (lean) with orzo", snack: "1 rice cake with a little peanut butter" },
                    { day: "Sunday", breakfast: "1 egg scrambled with avocado & bread", lunch: "Cheat Meal", snack: "1 sesame bar small" }
                ],
                "Week 3": [
                    { day: "Monday", breakfast: "2 eggs omelette with spinach, 3 tbsp oats", lunch: "Chicken stir-fry with noodles rice & vegetables", snack: "1 yogurt (2%) with 1 tbsp granola" },
                    { day: "Tuesday", breakfast: "1 rusk with a little light feta & tomato", lunch: "2 chicken patties with sweet potato mash", snack: "10 cashews & 1 mandarin" },
                    { day: "Wednesday", breakfast: "Smoothie: protein, banana, oats", lunch: "Beef fillet with quinoa & broccoli", snack: "1 rice cake with smoked salmon" },
                    { day: "Thursday", breakfast: "2 boiled eggs & half sesame bread ring (Thessaloniki-style)", lunch: "Penne whole-grain with chicken & sauce yogurt", snack: "Sunflower seeds & 1 prune" },
                    { day: "Friday", breakfast: "Yogurt (2%) with peanut butter & oats", lunch: "Lentils with tuna & 1 small rusk", snack: "1 small cereal bar" },
                    { day: "Saturday", breakfast: "2 scrambled eggs in bread", lunch: "Risotto with mushrooms & a little parmesan", snack: "Half banana with a little tahini" },
                    { day: "Sunday", breakfast: "Oat pancakes with honey", lunch: "Cheat Meal", snack: "1 handful nuts" }
                ],
                "Week 4": [
                    { day: "Monday", breakfast: "2 eggs omelette with a little potato", lunch: "1 patty beef in bread roll whole-grain", snack: "Yogurt (2%) with 5 almonds" },
                    { day: "Tuesday", breakfast: "Bread with avocado & 1 egg poached", lunch: "Chicken curry with coconut milk & rice", snack: "1 handful nuts" },
                    { day: "Wednesday", breakfast: "Oat bowl with milk 2%, cocoa & hazelnuts", lunch: "Spaghetti whole-grain with 1 egg & parmesan", snack: "Bread whole-grain with turkey" },
                    { day: "Thursday", breakfast: "2 boiled eggs & anthotyro cheese", lunch: "Salmon baked with potato & asparagus", snack: "Smoothie: Milk 2%, peanut butter & honey" },
                    { day: "Friday", breakfast: "Pancake with cottage cheese & honey", lunch: "Baked giant beans with chicken sausage", snack: "1 juice orange" },
                    { day: "Saturday", breakfast: "2 fried eggs with 1 small rusk", lunch: "1 piece pastitsio", snack: "5 cashews & dried apricot" },
                    { day: "Sunday", breakfast: "2 eggs with whole-grain bread", lunch: "Cheat Meal", snack: "1 fruit" }
                ]
            }
        }
    }
};


function displayDiet() {
    const params = new URLSearchParams(window.location.search);
    const gender = params.get('gender'); 
    const weight = parseFloat(params.get('w'));
    const height = parseFloat(params.get('h'));
    
    const container = document.getElementById('result-container');
    if (!container) return;

    
    if (!gender || !dietDatabase.balanced[gender]) {
        container.innerHTML = "<h2>Error</h2><p>Please return to the home page and fill in the details your.</p>";
        return;
    }

    const data = dietDatabase.balanced[gender];
    
    
    let multiplier = (weight > 80 || height > 180) ? 1.2 : 1.0; 
    
    let html = `<h1>${data.title}</h1>`;
    
    
    if(multiplier > 1.0) {
        html += `<div style="background: rgba(0, 210, 255, 0.2); border-left: 5px solid #00d2ff; padding: 15px; margin-bottom: 30px; border-radius: 8px;">
                    <strong>💡 Adjustment of Quantities (Multiplier 1.2x):</strong> Due to of the body type your (Weight: ${weight}kg, Height: ${height}cm), the quantities in basic ingredients (e.g. rice, meat) have increased automatically by 20% for to cover the needs your.
                 </div>`;
    }

    
    for (let week in data.weeks) {
        html += `<h2 style="margin-top:40px; color:#00d2ff;">${week}</h2>
                 <table class="diet-table" style="width:100%; border-collapse:collapse; margin-bottom:20px;">
                    <thead>
                        <tr style="background:rgba(255,255,255,0.1); text-align:left;">
                            <th style="padding:12px; border-bottom:2px solid #00d2ff;">Day</th>
                            <th style="padding:12px; border-bottom:2px solid #00d2ff;">Breakfast</th>
                            <th style="padding:12px; border-bottom:2px solid #00d2ff;">Lunch</th>
                            <th style="padding:12px; border-bottom:2px solid #00d2ff;">Snack</th>
                        </tr>
                    </thead>
                    <tbody>`;
                    
        data.weeks[week].forEach(day => {
            let lunchText = day.lunch;
            
            
            if(multiplier > 1.0) {
                lunchText = lunchText.replace("200g", "240g (1.2x)")
                                     .replace("130g", "156g (1.2x)")
                                     .replace("2 cup", "2.4 cup (1.2x)")
                                     .replace("1 cup", "1.2 cup (1.2x)");
            }

            html += `<tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                        <td style="padding:12px; font-weight:bold; color:#00d2ff;">${day.day}</td>
                        <td style="padding:12px;">${day.breakfast}</td>
                        <td style="padding:12px;">${lunchText}</td>
                        <td style="padding:12px;">${day.snack}</td>
                     </tr>`;
        });
        
        html += `</tbody></table>`;
    }
    
    container.innerHTML = html;
}


window.onload = displayDiet;