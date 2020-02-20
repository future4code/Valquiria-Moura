import * as moment from "moment"
import { PostCreator } from "./postCreator"
import { FileManager } from "./JSONFileManager"
 
export class NormalPostCreator implements PostCreator {
    constructor (
        public nome: string,
        public texto: string,
    ) {}
    

    create(){
        const fileManager = new FileManager("./posts.json")
        const data: string = moment().format( "DD/MM/YYYY HHmm" )
        let posts = fileManager.readFile()
        const newPost: any = {nome: this.nome, texto: this.texto, data}
        posts = [...posts, newPost]
        fileManager.writeFile(posts)
    }
}