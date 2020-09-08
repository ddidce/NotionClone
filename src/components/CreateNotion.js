import React, { useState, useCallback } from 'react'

const CreateNotion = ({newLine}) => {
    const [note, setNote] = useState('');

    const createNote = () => {
        let input = document.createElement("input");
        input.type = "text";
        return(() => {})
    }

    const onChangeNote = e => {
        
        setNote(e.target.value);
    }

    return (
        <div name={note} onChange={onChangeNote} contentEditable="true">
            {createNote}
        </div>
    )
}

export default CreateNotion
