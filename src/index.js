//graph
class boardTree {
    constructor(x){
        this.board = buildBoard(x)
    }

    //add node
    addNode(){
    for(let i = 0; i < this.board.length; i++){
       for(let j = 0; j < this.board.length; j++){
           this.board[i][j].push(new Node(i,j));
       }
    }
   }
   
   addVertex(){
    this.board.map(slot => {
        slot.map(node => {
            node[0].addEdges()
        })
    })
   }
   
}
 //find node
 function find(xValue, yValue){
    if(xValue >= 0 && xValue < 8 && yValue >= 0 && yValue < 8){
        return  boardGraph.board[xValue][yValue][0];
        
    }else return 

}
//define node
class Node {
    edges = [];
    visited = false;
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    addEdge = (node) =>{
        this.edges.push(node)
    };

    moveOne(){
        let xEdge = this.x+2;
        let yEdge = this.y+1 
        if(xEdge >= 0 && xEdge < 8 && yEdge >= 0 && yEdge < 8){
            this.addEdge(find(xEdge, yEdge))
        }

    };
    moveTwo(){
        let xEdge = this.x+2;
        let yEdge = this.y-1 
        if(xEdge >= 0 && xEdge < 8 && yEdge >= 0 && yEdge < 8){
            this.addEdge(find(xEdge, yEdge))
        }
        
    };
    moveThree(){
        let xEdge = this.x+1;
        let yEdge = this.y+2 
        if(xEdge >= 0 && xEdge < 8 && yEdge >= 0 && yEdge < 8){
            this.addEdge(find(xEdge, yEdge))
        }
    };
    moveFour(){
        let xEdge = this.x+1;
        let yEdge = this.y-2 
        if(xEdge >= 0 && xEdge < 8 && yEdge >= 0 && yEdge < 8){
            this.addEdge(find(xEdge, yEdge))
        }
    };
    moveFive(){
        let xEdge = this.x-1;
        let yEdge = this.y+2 
        if(xEdge >= 0 && xEdge < 8 && yEdge >= 0 && yEdge < 8){
            this.addEdge(find(xEdge, yEdge))
        }
    };
    moveSix(){
        let xEdge = this.x-1;
        let yEdge = this.y-2 
        if(xEdge >= 0 && xEdge < 8 && yEdge >= 0 && yEdge < 8){
            this.addEdge(find(xEdge, yEdge))
        }
    };
    moveSeven(){
        let xEdge = this.x-2;
        let yEdge = this.y+1 
        if(xEdge >= 0 && xEdge < 8 && yEdge >= 0 && yEdge < 8){
            this.addEdge(find(xEdge, yEdge))
        }
    }; 
    moveEight(){
        let xEdge = this.x-2;
        let yEdge = this.y-1 
        if(xEdge >= 0 && xEdge < 8 && yEdge >= 0 && yEdge < 8){
            this.addEdge(find(xEdge, yEdge))
        }
    }
    //add edges
    addEdges(){
      this.moveOne();
      this.moveTwo();
      this.moveThree();
      this.moveFour();
      this.moveFive();
      this.moveSix();
      this.moveSeven();
      this.moveEight();
    }
};


function shortestPathKnight(startX, startY, targetX, targetY) {
    const startNode = find(startX, startY);
    const queue = [];
    const path = [];
    queue.push([startNode, 0]);
    path.push(`[${startNode.x}, ${startNode.y}]` + '=>')
    startNode.visited = true;

    while (queue.length > 0) {
        const [node, distance] = queue.shift()
        if (node.x === targetX && node.y === targetY) {
            path.push(`[${node.x}, ${node.y}]`)
            return `reached goal in ${distance} moves! your path: ${path.join(' ')}`;
        }

        
            for (let edge of node.edges){
                if(find(edge.x, edge.y).visited === false){
                    queue.push([find(edge.x, edge.y), distance + 1]);
                    if(path.length < distance + 1){
                        path.push(`[${node.x}, ${node.y}]` + ' =>')
                    }
                    find(edge.x, edge.y).visited = true;
                }
            }

            
               
        
        
    }

    return -1;
}

//build board-build array
function buildBoard(x) {
   let result = []
for(let i = 0; i <= x; i++){
    result.push([])
    for(let j = 0; j<=x; j++){
        result[i].push([]);
    }
    
}
return result
}




const boardGraph = new boardTree(7);
boardGraph.addNode();
boardGraph.addVertex();
console.log(boardGraph.board);
console.log(shortestPathKnight(0, 0, 1, 7));