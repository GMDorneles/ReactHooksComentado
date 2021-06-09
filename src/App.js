import React, { useState, useEffect, useMemo, useCallback } from 'react';
        
    function App(){
        //nome da state / funcao
        const [tarefas, setTarefas]= useState([]);
      
        const [input,setInput]= useState('');
        //component didmounted monta uma vez devido ao [] vazio
        //funçao
        useEffect(()=>{
            const tarefasStorage =localStorage.getItem('tarefas');
            if(tarefasStorage){
                setTarefas(JSON.parse(tarefasStorage));
            }
            //quando sair do componente desmontar
            // o que fazre no fim
            // return ()=>{};
        //quando
        },[]);

        //component update  [state]
        useEffect(()=>{
            //transformar em string
            localStorage.setItem('tarefas',JSON.stringify(tarefas));
        //qundo essa state for alterada ocorrerá a alteração da funçao
        },[tarefas]);

        //memo  retorna valor             /funçao  /o que será mostrado/ state que é  alterada para chamar a funçao
        const totalTarefas = useMemo(()=>tarefas.length,[tarefas]);

        //utilizado para não chamar um funçao de forma desnecessaria, semelhante ao memo, mas retorna funções
        const handleAdd = useCallback(()=>{
            setTarefas([...tarefas,'aprender react',input]);
           //limpa input
            setInput('');
        //recebe hooks utilizados
        },[input,tarefas]);

        return(
            <div>
                <ul>
                    {tarefas.map(tarefa=>(
                        <li key={tarefa}>{tarefa}</li>
                    ))}
                </ul>
                <br/>
                <strong>Você tem {tarefas.length} tarefas!</strong>

                <input type='text' value={input} onChange={(e)=> setInput(e.target.value)}></input>
                <button type="button" onClick={handleAdd}>Adicionar</button>
                
            </div>
        )   
    }
   
    

export default App;