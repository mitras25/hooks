
import "./Content.css";
import { Switch, Route } from "react-router-dom";
import Home from "../exemplos/Home";
import UseState from "../exemplos/UseState";
import UseEffect from "../exemplos/UseEffect";
import UseRef from '../exemplos/UseRef'
import FormDados from '../exemplos/FormDados'
import UseMemo from '../exemplos/UseMemo'
import CreatContext from '../exemplos/CreatContext'
import UseReducer from '../exemplos/UseReducer'

export default function Content(props) {
    return (
        <main className="Content">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/useState" component={UseState} />
                <Route path='/useEffect' component={UseEffect} />
                <Route path='/useRef' component={UseRef} />
                <Route path='/formDados' component={FormDados} />
                <Route path='/useMemo' component={UseMemo} />
                <Route path='/creatContext' component={CreatContext} />
                <Route path='/useReducer' component={UseReducer} />
            </Switch>
        </main>
    );
}
