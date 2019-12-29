import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
function withStyle(Comp, styles) {
    function newCom(props) {
        if (props.staticContext) {
            props.staticContext.css.push(styles._getCss());
        }
        return <Comp {...props} />
    }
    // newCom.loadData = Comp.loadData
    // return newCom
    return hoistStatics(Comp, newCom)
}

export default withStyle