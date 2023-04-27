import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { UtilLibGeneratorSchema } from './schema';
import { libraryGenerator } from '@nrwl/js';

export default async function (tree: Tree, schema: UtilLibGeneratorSchema) {
  await libraryGenerator(tree, {
    name: `util-${schema.name}`,
    directory: schema.directory,
    tags: `type:util, scope:${schema.directory}`,
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
