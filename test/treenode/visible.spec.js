const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNode.prototype.visible', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1
            }]
        });
    });

    it('exists', function() {
        expect(tree.node(1).visible).to.be.a('function');
    });

    it('returns true when visible', function() {
        expect(tree.node(1).visible()).to.be.true;
    });

    it('returns false when hidden', function() {
        const node = tree.node(1);
        node.hide();

        expect(node.visible()).to.be.false;
    });
});
