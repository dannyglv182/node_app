/** @module helpers */
import {dirname} from 'path';
import {fileURLToPath} from 'url';

/**
 * DIY __dirname since it's removed from ES Modules:
 * https://codingbeautydev.com/blog/javascript-dirname-is-not-defined-in-es-module-scope/
 * @function
 * @param {ImportMeta} meta Fastify-provided import meta
 */
export function getDirName(meta: ImportMeta) {
	const __filename = fileURLToPath(meta.url);

	return dirname(__filename);
}
