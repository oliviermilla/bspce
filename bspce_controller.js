import { Controller } from "@hotwire/stimulus"

export default class extends Controller{
    connect() {
        console.log("Stimulus loaded!", this.element)
    }
}
