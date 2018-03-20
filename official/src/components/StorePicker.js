import React from 'react';

class StorePicker extends React.Component {
    createRef() {
        function ref(c) {
            ref.value = c;
        }
        
        return ref;
    }

    myInput = this.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const store = this.myInput.value.value;
        this.props.history.push(`/store/${store}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit = { this.goToStore }>
                <h2>Please enter the store</h2>
                <input type="text" required placeholder="Store name" ref = {this.myInput} />
                <button type="submit">Visit Store -></button>
            </form>
        );
    }
}

export default StorePicker;