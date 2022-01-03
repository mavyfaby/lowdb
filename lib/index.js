module.exports = {
    JSONFile: require("./adapters/JSONFile"),
    JSONFileSync: require("./adapters/JSONFileSync"),
    LocalStorage: require("./adapters/LocalStorage"),
    Memory: require("./adapters/Memory"),
    MemorySync: require("./adapters/MemorySync"),
    TextFile: require("./adapters/TextFile"),
    TextFileSync: require("./adapters/TextFileSync"),
    Low: require("./Low"),
    LowSync: require("./LowSync"),
};
