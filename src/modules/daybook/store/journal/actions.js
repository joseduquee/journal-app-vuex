import journalApi from "../../api/journalApi"


export const loadEntries = async({ commit }) => {
    const { data } = await journalApi.get('/api/entries')
    const entries = data

    commit('setEntries', entries)
}

export const updateEntry = async({ commit}, entry) => {
    await journalApi.put('/api/entries', entry)

    commit('updateEntry', { ...entry })

}

export const createEntry = async({ commit }, entry) => {

    const { text, date } = entry

    const entryToCreate = { text, date }

    entry.date = Date.now()
    console.log(entry)
    
    const { data } = await journalApi.post('/api/entries', entryToCreate)
    
    entryToCreate.id = data

    commit('addEntry', { entryToCreate })
    return entryToCreate.id

}