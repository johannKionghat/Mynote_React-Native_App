import { db } from "../App"


// *****************TYPE*************************
// CREATE TYPE
export const createCategory = (name, color)=>{
    const statement = db.prepareSync(
        "INSERT INTO categorie (name, color) VALUES ($name, $color)"
     );
     try{
        // Default value
        let result = statement.executeSync({$name:name, $color:color});
        return 
     }finally{
        statement.finalizeSync();
     }
} 
//  READ TYPE
export function getAllCategories (){
    const statement = db.prepareSync(
        "SELECT * FROM categorie"
    )
    let AllCategories = [];
    try{
        let result = statement.executeSync()
        AllCategories = result.getAllSync();
    }finally{
        statement.finalizeSync()
    }
    return AllCategories;
}
// update Categorie.name
export const updateCategoryName = (newElement,lastELement)=>{
    const statement = db.prepareSync(
        "UPDATE categorie SET name = $newElement WHERE name = $lastELement"
    );
    try{
        let result = statement.executeSync({$newElement:newElement, $lastELement:lastELement});
    }finally{
        statement.finalizeSync();
    }
}
// update Categorie.color
export const updateCategoryColor = (newElement, lastELement)=>{
    const statement = db.prepareSync(
        "UPDATE categorie SET color = $newElement WHERE color = $lastELement"
    );
    try{
        let result = statement.executeSync({$newElement:newElement, $lastELement:lastELement});
    }finally{
        statement.finalizeSync();
    }
}
// Delete All Categorie
export const deleteAllCategories = ()=>{
    const result = db.execSync(
        "DELETE FROM categorie"
    )
}
export const deleteCategoryByName = (name)=>{
    const statement = db.prepareSync(
        "DELETE FROM categorie WHERE name = $name"
    );
    try{
        let result = statement.executeSync({$name:name})
    }finally{
        statement.finalizeSync()
    }
}
// ************NOTE***************
 // CREATE Note
export const createNote = (title, content, category_id)=>{
    const statement = db.prepareSync(
        "INSERT INTO notes (title, content, category_id) VALUES ($title, $content, $category_id)"
        );
        try{
           // Default value
           let result = statement.executeSync({$title:title, $content:content, $category_id:category_id});
        }finally{
            statement.finalizeSync()
        }
}

//  READ notes
export const getAllNotes = ()=>{
    const statement = db.prepareSync(
        "SELECT * FROM notes"
    );
    let AllNotes = [];
    try{
        let result = statement.executeSync()
        AllNotes = result.getAllSync();
    }finally{
        statement.finalizeSync()
    }
    return AllNotes;
}

// update notes.title
export const updateNoteTitle = (newElement, id)=>{
    const statement = db.prepareSync(
        "UPDATE notes SET title = $newElement WHERE id = $id"
    );
    try{
        let result = statement.executeSync({$newElement:newElement, $id:id});
    }finally{
        statement.finalizeSync();
    }
}
// update notes.content
export const updateNoteContent = (newElement, id)=>{
    const statement = db.prepareSync(
        "UPDATE notes SET content = $newElement WHERE id = $id"
    );
    try{
        let result = statement.executeSync({$newElement:newElement, $id:id});
    }finally{
        statement.finalizeSync();
    }
}

// Delete All Notes
export const deleteAllNotes = ()=>{
    const result = db.execSync(
        "DELETE FROM notes"
    )
}
// Delete note by id
export const deleteNoteById = (id)=>{
    const statement = db.prepareSync(
        "DELETE FROM notes WHERE id = $id"
    );
    try{
        let result = statement.executeSync({$id:id})
    }finally{
        statement.finalizeSync()
    }
}


