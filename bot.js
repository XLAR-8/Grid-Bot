class Bot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isplaying = false;
        this.maxRow = 10;
        this.maxCol = 10;
        this.FaceDirectionX = [1, 0, -1, 0]; // direction of face of robot
        this.FaceDirectionY = [0, -1, 0, 1]; // direction of face of robot
        this.originX = 0;
        this.originY = 0;
    }
  
  relocatebot(cords) { 
        
        var splitted = cords.split(",");
        //console.log(splitted[0]);
        this.x = splitted[0]
        this.y = splitted[1];
        
        if (this.x > this.maxRow || this.y > this.maxCol || this.x <= this.originX || this.y <= this.originY) {
            return "Botout";
            }
        else 
            return "done";    
      }

    move(steps) {

        steps = steps.toUpperCase();

        const stepsSize = steps.length;
        var face = 0;
        for (var i = 0; i < stepsSize; i++) {
            if (steps[i] == 'R') {
                face += 1;
                if (face >= 4)
                    face -= 4;
            } else if (steps[i] == 'L') {
                face -= 1;
                if (face < 0)
                    face += 4;
            } else {
                this.x += this.FaceDirectionX[face];
                this.y += this.FaceDirectionY[face];
            }
            if (this.x > this.maxRow || this.y > this.maxCol || this.x <= this.originX || this.y <= this.originY) {
                return "Botout";
            }

        }

        return [this.x, this.y];

    }


    shortPath(cordinates) {

        var splitted = cordinates.split(",");
        //console.log(splitted[0]);
        var xcord = splitted[0]
        var ycord = splitted[1];
        var ans = "";
        var face = 0;
        if (xcord > this.maxRow || ycord > this.maxCol)
            return "Size_exceded";
        else {
            if (xcord < this.x) {
                ans = "LL";
                face = 2;
                for (var i = 0; i < this.x - xcord; i++) {
                    ans += 'F';
                }
                this.x = xcord;
            }
            if (xcord > this.x) {
                for (var i = 0; i < xcord - this.x; i++) {
                    ans += 'F';
                }
                this.x = xcord;
            }
            if (this.x == xcord) {
                if (this.y == ycord) return ans;
                else {
                    if (face == 0) {
                        if (ycord > this.y)
                            ans += "L";
                        else
                            ans += "R";
                        for (var i = 0; i < Math.abs(ycord - this.y); i++)
                            ans += 'F';
                    } else {
                        if (ycord > this.y)
                            ans += "R";
                        else
                            ans += 'L';
                        for (var i = 0; i < Math.abs(ycord - this.y); i++)
                            ans += 'F';
                    }
                }
            }
        }
        return ans;
    }
}

module.exports = Bot;
