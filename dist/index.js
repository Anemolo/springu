function r(r,n,t,i){var a=r[n],e=r[n+"Velocity"];null==e&&(e=0);var o=(e*i.damping+(t-a)*i.spring)*i.friction;return Math.abs(o)<i.snapThreshold&&(o=t-a),r[n+"Velocity"]=o,o}exports.default=r,exports.springu=r;
//# sourceMappingURL=index.js.map
