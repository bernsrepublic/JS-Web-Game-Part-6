// Create the playable character
const pc = newPlayableCharacter(100, 110);

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300);

// have the NPC start walking east immediately
// npc.walkNorth(1400, () => {
//   npc.walkEast(1200, () => {
//     npc.walkSouth(300, () => {
//       npc.walkEast(1500, () => {
//         npc.walkSouth(1500, () => {
//           npc.walkWest(2700, () => {
//             npc.walkNorth(400);
//           });
//         });
//       });
//     });
//   });
// });
// previous code block was replaced by npc to clean up the code ^
// npc
//   .walkNorth(1400)
//   .then(() => npc.walkEast(1200))
//   .then(() => npc.walkSouth(300))
//   .then(() => npc.walkEast(1500))
//   .then(() => npc.walkSouth(1500))
//   .then(() => npc.walkWest(2700))
//   .then(() => npc.walkNorth(400));

// .then code block replaced by async/await (below)

async function moveNPC() {
  await npc.walkNorth(1400);
  await npc.walkEast(1200);
  await npc.walkSouth(300);
  await npc.walkEast(1500);
  await npc.walkSouth(1500);
  await npc.walkWest(2700);
  await npc.walkNorth(400);
}
moveNPC();

// Create the inventory
const inventory = newInventory();
move(inventory).to(0, 0);

// Create everything else
move(newImage("assets/tree.png")).to(200, 450);
move(newImage("assets/pillar.png")).to(350, 250);
move(newImage("assets/pine-tree.png")).to(450, 350);
move(newImage("assets/crate.png")).to(150, 350);
move(newImage("assets/well.png")).to(500, 575);
move(newItem("assets/sword.png")).to(500, 555);
move(newItem("assets/shield.png")).to(165, 335);
move(newItem("assets/staff.png")).to(600, 250);
