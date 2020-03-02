import { JSONFileManager } from './JSONFileManager';
import { UserAccount } from './f4bank';

const fileManager = new JSONFileManager()

//LÊ CLIENTES
const cliente1 = fileManager.lerContaEmJSON()
const cliente2 = fileManager.lerContaEmJSON()

new UserAccount('André', '12345678910', 39)
new UserAccount('Isabel', '98765432110', 3)

