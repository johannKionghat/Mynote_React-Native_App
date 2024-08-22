import * as SQLite from "expo-sqlite";
import { themeColors } from "../theme";

// creation de ma base de données
export const db =  SQLite.openDatabaseSync("mynote.db") // si elle n'existe pas elle sera crée automatiquement

export async function setupDatabase () {
    await db.execAsync(
    //   "DROP TABLE IF EXISTS categorie",
      "CREATE TABLE IF NOT EXISTS categorie (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50) NULL UNIQUE, color VARCHAR(20) NULL UNIQUE)",
    )
    await db.execAsync(
    //   "DROP TABLE IF EXISTS notes",
      "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(100) NULL, content TEXT NULL,reminder BOOLEAN DEFAULT 0,bookmark BOOLEAN DEFAULT 0,reminderAt DATETIME DEFAULT NULL,updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP, createdAT DATETIME DEFAULT CURRENT_TIMESTAMP, category_id INT , FOREIGN KEY (category_id) REFERENCES categorie(id) )",
    );
    // await createCategory('Normal', themeColors.grayOpacity(0.5));
  };

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

export async function getCategorybyId(id) {
    const statement = await db.prepareAsync(
        "SELECT * FROM categorie WHERE id = $id"
    )
    let category = [];
    try{
     let result = await statement.executeAsync({$id:id})
     category = await result.getFirstAsync();
    }finally{
        await statement.finalizeAsync();
    }
    return category;

}

export async function getCategorybyName(name) {
    const statement = await db.prepareAsync(
        "SELECT * FROM categorie WHERE name = $name"
    )
    let category = [];
    try{
     let result = await statement.executeAsync({$name:name})
     category = await result.getFirstAsync();
    }finally{
        await statement.finalizeAsync();
    }
    return category;
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
export const getAllNotesFilter = async (sortBy, range) => {
    // Validadtion des valeurs de `sortBy` et `range` pour éviter les injections SQL
    const validSortColumns = ['title', 'createdAT', 'updatedAt', 'category_id'];
    const validRangeOptions = ['ASC', 'DESC'];
  
    if (!validSortColumns.includes(sortBy)) {
      throw new Error('Invalid sort column');
    }
    if (!validRangeOptions.includes(range)) {
      throw new Error('Invalid range option');
    }
  
    // Construisez dynamiquement la requête SQL
    const query = `SELECT * FROM notes ORDER BY ${sortBy} ${range}`;
  
    let AllNotes = [];
    const statement = await db.prepareAsync(query);
  
    try {
      let result = await statement.executeAsync();
      AllNotes = await result.getAllAsync();
    } finally {
      await statement.finalizeAsync();
    }
  
    return AllNotes;
  };
  
export const getNotesbyId = async (id)=>{
    const statement = await db.prepareAsync(
        "SELECT * FROM notes WHERE id = $id"
    )
    let Allnotes = [];
    try{
       const result = await statement.executeAsync({$id: id});
        Allnotes = await result.getAllAsync();
    }finally{
        await statement.finalizeAsync();
    }
    return Allnotes;
}

export const getNotesByDate = async (date)=>{
    const statement = await db.prepareAsync(
        "SELECT * FROM notes WHERE DATE(createdAT) = $date"
    )
    let Allnotes = [];
    try{
       const result = await statement.executeAsync({$date: date});
        Allnotes = await result.getAllAsync();
    }finally{
        await statement.finalizeAsync();
    }
    return Allnotes;
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
export const getNotesbyBookmark = async ()=>{
    const statement = await db.prepareAsync(
        "SELECT * FROM notes WHERE bookmark = 1"
    )
    let Allnotes = [];
    try{
       const result = await statement.executeAsync();
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
// update notes.reminder
export const updateNoteReminder = async (newElement, id)=>{
    const statement = await db.prepareAsync(
        "UPDATE notes SET reminder = $newElement WHERE id = $id"
    );
    try{
        let result = await statement.executeAsync({$newElement:newElement, $id:id});
    }finally{
       await statement.finalizeAsync();
    }
}
// update notes.updatedAT
export const updateNoteUpdatedAt = async (newElement, id)=>{
    const statement = await db.prepareAsync(
        "UPDATE notes SET updatedAt = $newElement WHERE id = $id"
    );
    try{
        let result = await statement.executeAsync({$newElement:newElement, $id:id});
    }finally{
       await statement.finalizeAsync();
    }
}
// update notes.Bookmark
export const updateNoteBookmark = async (newElement, id)=>{
    const statement = await db.prepareAsync(
        "UPDATE notes SET bookmark = $newElement WHERE id = $id"
    );
    try{
        let result = await statement.executeAsync({$newElement:newElement, $id:id});
    }finally{
       await statement.finalizeAsync();
    }
}
// update notes.category_id
export const updateNoteCategoryId = async (newElement, id)=>{
    const statement = await db.prepareAsync(
        "UPDATE notes SET category_id = $newElement WHERE id = $id"
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


