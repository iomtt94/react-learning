import React from 'react';

class AddFishForm extends React.Component {

    createRef() {
        function ref(c) {
            ref.value = c;
        }
        
        return ref;
    }

    nameRef = this.createRef();
    priceRef = this.createRef();
    statusRef = this.createRef();
    descRef = this.createRef();
    imageRef = this.createRef();

    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc:   this.descRef.value.value,
            image:  this.imageRef.value.value
        };
        this.props.addFish(fish);
        event.currentTarget.reset();
    }

    render() {
        return(
            <form className="fish-edit" onSubmit = { this.createFish }>
                <input type="text" name="name" placeholder="name" ref = {this.nameRef}/>
                <input type="text" name="price" placeholder="price" ref = {this.priceRef}/>
                <select name="status" ref = {this.statusRef}>
                    <option value="available">Fresh</option>
                    <option value="unvailable">Sold Out</option>
                </select>
                <textarea name="desc" placeholder="desc" ref = {this.descRef}/>
                <input type="text" name="image" placeholder="image" ref = {this.imageRef}/>
                <button type="submit">+add fish</button>
            </form>
        );
    }
}

export default AddFishForm;