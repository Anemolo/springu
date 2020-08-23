function r(r,t,n,a){var e=r[t],i=r[t+"Velocity"];null==i&&(i=0);var o=(i*a.damping+(n-e)*a.spring)*a.friction;return Math.abs(o)<a.snapThreshold&&(o=n-e),r[t+"Velocity"]=o,o}export default r;export{r as springu};
//# sourceMappingURL=index.modern.js.map
