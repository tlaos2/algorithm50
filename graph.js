//DFS

const adjacencyList = new Map();

adjacencyList.set(1, new Set([2,3]));
adjacencyList.set(2, new Set([3,4]));
adjacencyList.set(3, new Set());
adjacencyList.set(4, new Set([3]));


const visit = console.log;


const vistied = new Set();
const dfs = node=>{

    visit(node);
    vistied.add(node);

    for(let neighbour of adjacencyList.get(node)){
        if(!vistied.has(neighbour)){
            dfs(neighbour);
        }
    }
};


dfs(1)