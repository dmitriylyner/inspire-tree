const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNode.prototype.expandParents', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'AA',
                    id: 2,
                    children: [{
                        text: 'AAA',
                        id: 3
                    }]
                }]
            }]
        });
    });

    it('exists', function() {
        expect(tree.node(1).expandParents).to.be.a('function');
    });

    it('expands parents', function() {
        const node = tree.node(3);
        node.expandParents();

        expect(tree.node(1).collapsed()).to.be.false;
        expect(tree.node(2).collapsed()).to.be.false;
    });

    it('does not expand self', function() {
        expect(tree.node(3).collapsed()).to.be.true;
    });
});
