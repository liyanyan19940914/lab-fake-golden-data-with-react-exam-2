const App = React.createClass({
    getInitialState:function () {
        return {
            isEditor:true,
            elements:[]
        }
    },
    toggle:function () {
        this.setState({isEditor:!this.state.isEditor})
    },
    addElement:function (element) {
        const elements=this.state.elements;
        elements.push(element);
        this.setState({elements})
    },
    render: function () {
        return <div>
            <button onClick={this.toggle}>{this.state.isEditor?'preview':'edit'}</button>
            <div className={this.state.isEditor?'':'hidden'}>
                <Editor onAdd={this.addElement}/>
            </div>
            <div className={this.state.isEditor?'hidden':''}>
                <Preview/>
            </div>
        </div>;
    }
});
const Editor = React.createClass({
    render: function () {
        return <div>
            <Right onAdd={this.props.onAdd}/>
        </div>;
    }
});
const Right = React.createClass({
    add:function () {
        const element=$('input[name=element]:checked').val();
        this.props.onAdd(element)
    },
    render: function () {
        return <div>
            <input type="radio" name="element" value='text'/>文本框
            <input type="radio" name="element" value='date'/>日期
            <button onClick={this.add}>+</button>
        </div>;
    }
});
const Preview = React.createClass({
    render: function () {
        return <div>
            <h1>hello</h1>
        </div>;
    }
});
ReactDOM.render(<App/>,document.getElementById('content'));