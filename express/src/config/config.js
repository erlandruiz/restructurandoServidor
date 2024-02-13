import dotenv from 'dotenv'


import {Command} from 'commander'

const program = new Command()

program
    .option("-m, --mode <mode>", "Modo de ejecución del script (prod/dev)", "dev")

    program.parse()
    let opts = program.opts()

   let  modosPermitidos = ["prod", "dev"]
    if(!modosPermitidos.includes(opts.mode.toLowerCase())){
        console.log("Solo se admiten los modos dev y prod")
        process.exit()
    }
const mode = opts.mode
console.log(`esto es mode`, mode)

dotenv.config(
    {
        override: true,
     
        path:mode==="dev"?"./src/.env.development":"./src/.env.production"
    }
)

export const config ={
    PORT:process.env.PORT || 8080,
    MONGO_URL:process.env.MONGO_URL,
    DBNAME:process.env.DBNAME,
}