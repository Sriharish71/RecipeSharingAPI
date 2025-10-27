const express =require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/recipes',(req,res)=>{
    const {title, ingredients, instructions, cookTime,tags }=req.body;

    if(!title || !ingredients || !instructions || cookTime === undefined){
        return res.status(400).json({error:'missing required fields'});
    }

    if(!Array.isArray(ingredients)||!Array.isArray(instructions)){
    return res.status(400).json({error:'ingredients and instructions must be arrays'});
    }
    
    const duplicate = recipes.find((m) => m.recipeTitle === recipeTitle);
    if (duplicate) {
    return res.status(400).json({ error: "recipes already there" });
    }

  const newRescipes = {
    title,
    ingredients ,
    instructions,
    cookTime,
   
  };


recipes.push(newRescipes);
res.status(201).json(newRescipes);

});

app.get('/api/recipes',(req,res)=>{
  res.json(recipes);
})

app.put("/api/recipes/:id", (req, res) => {
  const { id } = req.params;
  const {title, ingredients, instructions } = req.body;

  const recipe = recipes.find((m) => m.id == id);
  if (!recipe) return res.status(404).json({ error: "recipe not found" });

  if(!Array.isArray(ingredients)||!Array.isArray(instructions)){
    return res.status(400).json({error:'ingredients and instructions must be arrays'});
  }

 

  if (title) recipe.title = title;
  if (ingredients) recipe.ingredients = ingredients;
  if (instructions) recipe.instructions = instructions;

  res.json({ message: " recipe!", data: recipe });
});

app.delete("/api/recipes/:id", (req, res) => {
  const { id } = req.params;

  const index = recipes.findIndex((m) => m.id == id);
  if (index === -1) return res.status(404).json({ error: "recipe not found" });

  movies.splice(index, 1);
  res.json({ message: "Recipe deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});