import React from 'react'

export default function test({hi}) {
    console.log(hi)
    return (
        <div>
            {hi.toString()}
        </div>
    )
}
