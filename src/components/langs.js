import { useEffect, useRef } from 'react'
import '../App.css'

export default function Langs({func}) {

    const selectBox = useRef()

    useEffect(()=>{
        for (let index = 0; index < selectBox.current.childElementCount; index++) {
            if (selectBox.current.children[index].value === localStorage.getItem("i18nextLng")) {           //componentDidMount gibi çalıştığı için son seçilen dili başta seçiyoruz
                selectBox.current.selectedIndex = index
            }
        }
    },[])

    return (
        <select id='lan' ref={selectBox} onChange={(e)=>func(e.target.value)}>
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
        </select>
    )
}