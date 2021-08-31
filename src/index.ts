import { Config, main } from './main'

const config: Config = {
  mountNode: document.getElementById('root') || document.body
}

main(config)
