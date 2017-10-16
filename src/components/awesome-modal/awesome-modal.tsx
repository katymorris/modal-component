import { Component, Method, Element, Prop, State } from "@stencil/core";

@Component({
    tag: 'awesome-modal',
    styleUrl: 'awesome-modal.scss'
})
export class AwesomeModal {
    buttons = ["Okay", "Cancel"]
    
    @Element() modalEl: HTMLElement;
    
    @Prop() title: string;
    @Prop() content: string;

    @State() showOptions = false;

    @Method() 
    open() {
        this.modalEl.style.display = "block";
    }
        
    closeModalHandler() {
        this.modalEl.style.display = 'none';
        this.showOptions = false;
    }

    showOptionsHandler() {
        this.showOptions = true;
    }

    render() {
        let options = null;
        if (this.showOptions) {
            options = (
                this.buttons.map(btn => (
                    <button onClick={this.closeModalHandler.bind(this)}>{btn}</button>
                )));
        }
        return (
            <div>
                <div class="am-icon-box">
                    <span class="am-icon am-icon-error am-icon-error-line am-icon-error-line-right"></span>
                    <span class="am-icon am-icon-error am-icon-error-line am-icon-error-line-left"></span>
                </div>
                <h1>{this.title}</h1>
                <p>{this.content}</p>
                <hr />
                <button onClick={this.showOptionsHandler.bind(this)}>Show Options</button>
                <hr />
                {options}
            </div>
        )
    }
}