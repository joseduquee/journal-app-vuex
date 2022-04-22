import journalApi from "../../api/journalApi"


export const loadEntries = async(/*{ commit }*/) => {
    const { data } = await journalApi.get('/api/entries')
    console.log( data )
}

export const updateEntry = async(/*{ commit }*/) => {

}

export const createEntry = async(/*{ commit }*/) => {

}