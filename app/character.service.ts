import {Injectable} from 'angular2/core';
import {CHARACTERS} from './mock-characters';

@Injectable()
export class CharacterService {
	getCharacters() { return Promise.resolve(CHARACTERS); }

	getCharacter(id: number) {
		return Promise.resolve(CHARACTERS)
			.then(characters => characters.filter(c => c.id === id)[0]);
	}
}


