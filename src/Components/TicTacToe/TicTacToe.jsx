
import { useReducer, useState } from 'react'
import './TicTacToe.css'
import icon_o from '../Assets/o-solid.svg'
import icon_x from '../Assets/x-solid.svg'

let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setlock] = useState(false);
    let titleRef = useReducer(null);

    const toggel = (event, num) => {
        if(lock) {
            return 0;
        }
        if(count % 2 === 0){
            event.target.innerHTML = `<img src='${icon_x}'>`;
            data[num] = "x";
            setCount(++count)
        }
        else{
            event.target.innerHTML =`<img src='${icon_o}'>`;
            data[num] = "o";
            setCount(++count)
        }
        checkWin()
    }

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
            won(data[2]);
        }
        else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
            won(data[5]);
        }
        else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
            won(data[8]);
        }
        else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
            won(data[6]);
        }
        else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
            won(data[7]);
        }
        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
            won(data[8]);
        }
        else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
            won(data[8]);
        }
        else if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
            won(data[2]);
        }
        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
            won(data[6]);
        }
    }
    const won = (winner) => {
        setlock(true);
        if(winner === "x") {titleRef.current.innerHTML = `Congratulations: <img src=${icon_x}> wins`}
        else{titleRef.current.innerHTML = `Congratulations: <img src=${icon_o} wins`}
    }

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>An <span>Ironclad</span> game production.</h1>
            <div className='board'>
                
                <div className='row1'>
                    <div className='boxes' onClick={(e) => (toggel(e, 0))}> </div>
                    <div className='boxes' onClick={(e) => (toggel(e, 1))}> </div>
                    <div className='boxes' onClick={(e) => (toggel(e, 2))}> </div>
                </div>
                <div className='row2'>
                    <div className='boxes' onClick={(e) => (toggel(e, 3))}> </div>
                    <div className='boxes' onClick={(e) => (toggel(e, 4))}> </div>
                    <div className='boxes' onClick={(e) => (toggel(e, 5))}> </div>
                </div>
                <div className='row3'>
                    <div className='boxes' onClick={(e) => (toggel(e, 6))}> </div>
                    <div className='boxes' onClick={(e) => (toggel(e, 7))}> </div>
                    <div className='boxes' onClick={(e) => (toggel(e, 8))}> </div>
                </div>
            </div>
            <button className='reset'>Reset</button>
        </div>
    )
}
export default TicTacToe