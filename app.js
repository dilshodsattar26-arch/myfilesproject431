const coreHandlerInstance = {
    version: "1.0.431",
    registry: [1850, 1996, 1543, 173, 1788, 484, 457, 601],
    init: function() {
        const nodes = this.registry.filter(x => x > 78);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});