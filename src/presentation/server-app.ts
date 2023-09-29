import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"

interface RunOptions {
    base: number
    limit: number
    show?: boolean
    fileName: string
    destination: string
}

export class ServerApp {
    static run({ base, limit, show, destination, fileName }: RunOptions) {
        console.log('Server Run👀')

        const table = new CreateTable()
            .execute({ base, limit })

        const wasCreated = new SaveFile()
            .execute({ 
                fileContent: table, 
                destination,
                fileName
            })

        if (show) console.log(table)

        if (wasCreated) {
            console.log('File created')
        } else {
            console.log('Error')
        }
    }
}