import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import style from './search.module.css'

const SearchBar = () => {

    const [characterOptions, setCharacterOptions] = useState(['option1', 'option2'])
    const [planetOptions, setPlanetOptions] = useState(['option1', 'option2'])
    const [speciesOptions, setSpeciesOptions] = useState(['option1', 'option2'])
    
    useEffect(() => {
        fetch('https://swapi.dev/api/people')
        .then( response => {
            return response.json()
        })
        .then (data => {
            setCharacterOptions(...data.result)
        })
        .catch ( err => {
            console.log(error)
        })

        fetch('https://swapi.dev/api/planets')
        .then( response => {
            return response.json()
        })
        .then (data => {
            setCharacterOptions(...data.result)
        })
        .catch ( err => {
            console.log(error)
        })

        fetch('https://swapi.dev/api/species')
        .then( response => {
            return response.json()
        })
        .then (data => {
            setSpeciesOptions(...data.result)
        })
        .catch ( err => {
            console.log(error)
        })
    }, [])

    return (
    <div>
        <form id='seacrh movie' onSubmit={handleSubmit(onSubmit)}>
            <div className={style.search_container}>
                <div className={style.search_group}>
                    <label for="character">Character</label>
                    <select name="character" id="character" {...register('character')}>
                        <option value="">-- Select Character --</option>
                        {characterOptions.map( (item, index => {
                            return (
                                <option value={item.name} key={index}>{item.name}</option>
                            )
                        }) )}
                    </select>
                </div>
                <div className={style.search_group}>
                    <label htmlFor="planet">Planet</label>
                    <select name="planet" id="planet" {...register('planet')}>
                        <option value="">-- Select Planet --</option>
                        {planetOptions.map( (item, index => {
                            return (
                                <option value={item.name} key={index}>{item.name}</option>
                            )
                        }) )}
                    </select>
                </div>
                <div className={style.search_group}>
                    <label htmlFor="species">Species</label>
                    <select name="species" id="species" {...register('species')}>
                        <option value="">-- Select Species --</option>
                        {speciesOptions.map( (item, index => {
                            return (
                                <option value={item.name} key={index}>{item.name}</option>
                            )
                        }) )}
                    </select>
                </div>
                <div className={style.search_group}>
                    <label htmlFor="release_date">Release Date After</label>
                    <input type="date" name="release_date" id="release_date" {...register('release_date')} />
                </div>
                <div className={style.submit}>
                    <input type="submit">Search</input>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SearchBar