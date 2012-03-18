// Node-link tree diagram using a simple "all leaves get space" algorithm
// for use with word trees
// 
// Note that the layout assumes (as do the others in d3) that the tree is
// being arranged with root at the top and leaves at the bottom, so
// > x, width
// ^ y, height

d3.layout.tree_tw = function() {
  var hierarchy = d3.layout.hierarchy().sort(null).value(null),
      separation = d3_layout_treeSeparation,
      size = [1, 1]; // width, height

  function tree(d, i) {
    var nodes = hierarchy.call(this, d, i),
        root = nodes[0];
        
    // Compute the left-most, right-most, and depth-most nodes for extents.
//     var left = d3_layout_treeSearch(root, d3_layout_treeLeftmost),
//         right = d3_layout_treeSearch(root, d3_layout_treeRightmost),
//         deep = d3_layout_treeSearch(root, d3_layout_treeDeepest),
//         x0 = left.x - separation(left, right) / 2,
//         x1 = right.x + separation(right, left) / 2,
//         y1 = deep.depth || 1;
// 
//     // Clear temporary layout variables; transform x and y.
//     d3_layout_treeVisitAfter(root, function(node) {
//       node.x = (node.x - x0) / (x1 - x0) * size[0];
//       node.y = node.depth / y1 * size[1];
//     });

    return nodes;
  }

  tree.separation = function(x) {
    if (!arguments.length) return separation;
    separation = x;
    return tree;
  };

  tree.size = function(x) {
    if (!arguments.length) return size;
    size = x;
    return tree;
  };

  return d3_layout_hierarchyRebind(tree, hierarchy);
};