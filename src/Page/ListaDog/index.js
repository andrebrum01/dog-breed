import React, { useCallback, useContext, useEffect, useState } from "react";
import {ListDogStyle,ViewImage} from './styled.js';

const ListaDog = (props)=>{

    const {token} = useContext(props.context);
    const [list, setList] = useState();
    const [search, setSearch] = useState("chihuahua");
    const [url,setUrl] = useState();

    useEffect(()=>{
        console.log(url);
    },[url]);

    const getList = useCallback(async ()=>{
        await fetch("https://dogbreed-api.q9.com.br/list?breed="+search,{
            mode: 'cors',
            method: "GET",
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                "Authorization":`${token}`
            }
        })
        .then(data=>{
            return data.json();
        })
        .then(response =>{
            setList(response);
            console.log(response.list);
        })
        .catch(e=>{
            console.error(e);
        })
        ;    
    },[token,search]);

    useEffect(()=>{
        getList();
    },[getList]);

    useEffect(()=>{
        getList(search);
    },[search,getList]);


    return(
        <ListDogStyle>
            { url &&<ViewImage 
            src={url}
            onClick={()=>setUrl()}
            >
                <img alt=""/>
                </ViewImage>}
            <select onChange={(e)=>setSearch(e.target.value)}>
                <option value="chihuahua" selected>chihuahua</option>                
                <option value="husky">husky</option>                
                <option value="pug">pug</option>                
                <option value="labrador">labrador</option>                
            </select>
            <div className="grid">
                
            {list&&list.list.map(item=>{
                return <picture
                onClick={(e)=>setUrl(e.target.firstChild.src)}
                >
                            <img 
                                className="dog"
                                alt="" 
                                src={item}
                                onClick={(e)=> console.log(e.target.url)}
                                style={{
                                    before:{
                                        backgroundImage: `url("${item}")`,
                                        backgroundColor: "red"
                                    }
                                }}
                            />
                        </picture>
            })}
            </div> 
        </ListDogStyle>
    );

}

export default ListaDog;