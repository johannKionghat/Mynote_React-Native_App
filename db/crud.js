import * as SQLite from "expo-sqlite";

// creation de ma base de données
export const db =  SQLite.openDatabaseSync("mynote.db") // si elle n'existe pas elle sera crée automatiquement
// *****************TYPE*************************
// CREATE TYPE
export const createCategory = async (name, color)=>{
    const statement = await db.prepareAsync(
        "INSERT INTO categorie (name, color) VALUES ($name, $color)"
     );
     try{
        // Default value
        let result = await statement.executeAsync({$name:name, $color:color});
        return 
     }finally{
        await statement.finalizeAsync();
     }
} 
//  READ TYPE
export async function  getAllCategories (){
    const statement = await db.prepareAsync(
        "SELECT * FROM categorie"
    )
    let AllCategories = [];
    try{
        let result = await statement.executeAsync()
        AllCategories = await result.getAllAsync();
    }finally{
        await statement.finalizeAsync()
    }
    return AllCategories;
}

export async function getCategorybyId (id) {
    const statement = await db.prepareAsync(
        "SELECT * FROM categorie WHERE id = $id"
    )
    // let category = [];
    try{
     let result = await statement.executeAsync({$id:id})
     category = await result.getFirstAsync();
     return category;
    }finally{
        await statement.finalizeAsync();
    }

}
// update Categorie.name
export const updateCategoryName = async (newElement,lastELement)=>{
    const statement = await db.prepareAsync(
        "UPDATE categorie SET name = $newElement WHERE name = $lastELement"
    );
    try{
        let result = await statement.executeAsync({$newElement:newElement, $lastELement:lastELement});
    }finally{
        await statement.finalizeAsync();
    }
}
// update Categorie.color
export const updateCategoryColor = async (newElement, lastELement)=>{
    const statement = await db.prepareAsync(
        "UPDATE categorie SET color = $newElement WHERE color = $lastELement"
    );
    try{
        let result = await statement.executeAsync({$newElement:newElement, $lastELement:lastELement});
    }finally{
        await statement.finalizeAsync();
    }
}
// Delete All Categorie
export const deleteAllCategories = async ()=>{
    const result = await db.execAsync(
        "DELETE FROM categorie"
    )
}
export const deleteCategoryByName = async (name)=>{
    const statement = await db.prepareAsync(
        "DELETE FROM categorie WHERE name = $name"
    );
    try{
        let result = await statement.executeAsync({$name:name})
    }finally{
        await statement.finalizeAsync()
    }
}
// ************NOTE***************
 // CREATE Note
export const createNote = async (title, content, category_id)=>{
    const statement = await db.prepareAsync(
        "INSERT INTO notes (title, content, category_id) VALUES ($title, $content, $category_id)"
        );
        try{
           // Default value
           let result = await statement.executeAsync({$title:title, $content:content, $category_id:category_id});
        }finally{
            await statement.finalizeAsync()
        }
}

//  READ notes
export const getAllNotes = async ()=>{
    const statement = await db.prepareAsync(
        "SELECT * FROM notes"
    );
    let AllNotes = [];
    try{
        let result = await statement.executeAsync()
        AllNotes = await result.getAllAsync();
    }finally{
        await statement.finalizeAsync()
    }
    return AllNotes;
}

export const getNotesbyTitle = async (searchElement)=>{
    const statement = await db.prepareAsync(
        "SELECT * FROM notes WHERE title LIKE $searchElement"
    )
    let Allnotes = [];
    try{
       const result = await statement.executeAsync({$searchElement: `%${searchElement}%`});
        Allnotes = await result.getAllAsync();
    }finally{
        await statement.finalizeAsync();
    }
    return Allnotes;
}
export const getNotesbyContent = async (searchElement)=>{
    const statement = await db.prepareAsync(
        "SELECT * FROM notes WHERE content LIKE $searchElement"
    )
    let Allnotes = [];
    try{
       const result = await statement.executeAsync({$searchElement: `%${searchElement}%`});
        Allnotes = await result.getAllAsync();
    }finally{
        await statement.finalizeAsync();
    }
    return Allnotes;
}

// update notes.title
export const updateNoteTitle = async (newElement, id)=>{
    const statement = await db.prepareAsync(
        "UPDATE notes SET title = $newElement WHERE id = $id"
    );
    try{
        let result = await statement.executeAsync({$newElement:newElement, $id:id});
    }finally{
       await statement.finalizeAsync();
    }
}
// update notes.content
export const updateNoteContent = async (newElement, id)=>{
    const statement = await db.prepareAsync(
        "UPDATE notes SET content = $newElement WHERE id = $id"
    );
    try{
        let result = await statement.executeAsync({$newElement:newElement, $id:id});
    }finally{
        await statement.finalizeAsync();
    }
}

// Delete All Notes
export const deleteAllNotes = async ()=>{
    const result = await db.execAsync(
        "DELETE FROM notes"
    )
}
// Delete note by id
export const deleteNoteById = async (id)=>{
    const statement =await db.prepareAsync(
        "DELETE FROM notes WHERE id = $id"
    );
    try{
        let result = await statement.executeAsync({$id:id})
    }finally{
        await statement.finalizeAsync()
    }
}


