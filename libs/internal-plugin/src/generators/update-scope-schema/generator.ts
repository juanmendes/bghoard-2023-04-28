import { formatFiles, Tree, updateJson } from '@nrwl/devkit';

export default async function (tree: Tree) {
  updateJson(tree, 'nx.json', (json) => ({
    ...json,
    defaultProject: 'api',
  }));
  await formatFiles(tree);
}
