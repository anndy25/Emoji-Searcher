import React, { useState, useEffect } from 'react'
import '../App.css';


import emojiData from './emoji.json';


const EmojiSearcher = () => {
    const [emojis, setEmojis] = useState([]);
    const [value, setValue] = useState("");
    const [words, setWords] = useState("");
    useEffect(() => {
        const emojiGet = async () => {
            if (value === "") {
                setEmojis(emojiData.slice(0,120));
                const a=emojiData;
                
            } else {
                const em = emojiData.filter((e) => e.slug.toLowerCase().includes(value.toLowerCase()));
                setEmojis(em);
            }

        }
        emojiGet();
    }, [value]);
    const changeText = (e) => {
        setWords(e.target.value);

    }
    return (
        <div className=" d-flex justify-content-center align-items-center py-4 " style={{ height:"100vh"}} >
            <div className="container col-lg-6 border col-sm-11 p-2 shadow-sm p-3 mb-5 bg-body rounded " id="col-common" >


                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Text Area</label>

                    <textarea

                        className="form-control"
                        name="desc"
                        value={words}
                        onChange={changeText}
                        id="exampleFormControlTextarea1"
                        placeholder="Text Area..."
                        autocomplete="off"
                        style={{ minHeight: "15rem",fontSize: "1.2rem"}}
                    >
                    </textarea>
                    <label for="exampleFormControlInput1" className="form-label"></label>
                    <input
                        type="search"
                        className="form-control"
                        name="search"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        id="exampleFormControlInput1"
                        placeholder="Emoji Search..."
                        autocomplete="off"
                    />

                </div>
                <section className="overflow-auto p-1" style={{ height: "12rem",backgroundColor:'#f1dbdb14' }}>
                    <div className="row  m-0">

                        {emojis.map((elm, index) => {
                            return (
                                <div key={index} className="col-lg-2 col-2  pt-2"
                                    onClick={() => setWords(words + elm.character)}
                                    style={{ cursor: "pointer" }}>
                                    <h4 className="text-center">{elm.character}</h4>
                                    {/* <small className="text-center" >{elm.slug}</small> */}
                                </div>
                            );

                        })}

                    </div>

                </section>

            </div>

        </div>
    )
}

export default EmojiSearcher;
