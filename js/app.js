const App = React.createClass({
    getInitialState:function () {
        return {
            isEditor:true
        }
    },
    toggle:function () {
        this.setState({isEditor:!this.state.isEditor})
    },
    render: function () {
        return <div>
            <button onClick={this.toggle}>{this.state.isEditor?'preview':'edit'}</button>
            <div className={this.state.isEditor?'':'hidden'}>
                <Editor/>
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
            <h1>hello world</h1>
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