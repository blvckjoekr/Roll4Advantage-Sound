class HealthBar
{
    constructor(x, y, w, h, maxHealth, color)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxHealth = 50;
        this.maxWidth = w;
        this.health = 50;
        this.color = color;
    }
//fills the healthbar with color
    show(context)
    {
        context.lineWidth = 4;
        context.strokeStyle = "#333";
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }
    
    //updates the healthbar to the new level and will only excute if health is more than -1. Can't figure out how to make it so that it will deplete completely
    updateHealth(health)
    {
        if(health >= -1)
        {
            this.health = health;
            this.w = (this.health / 50) * this.maxWidth;
        } 
        else if(health <= 0)
        {
            alert("YOU WIN");
        }
    }
}
