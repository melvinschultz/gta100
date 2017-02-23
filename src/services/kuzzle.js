/**
 * Created by melvin on 13/02/17.
 */
import Kuzzle from 'kuzzle-sdk'

export default new Kuzzle('http://localhost:7512', {defaultIndex: ''})