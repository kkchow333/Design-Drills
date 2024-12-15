"use strict";
figma.showUI(__html__, { width: 350, height: 450 });
figma.ui.onmessage = function (msg) {
    console.log("Received message:", msg);
    console.log("Dropdown value:", msg.dropdown);
    console.log("Shape value:", msg.shape);
    var typographyShapes = ['star', 'circle', 'triangle'];
    var hierarchyShapes = ['square', 'heart', 'hexagon'];
    if (msg.type === 'apply-shape') {
        var frame_1 = figma.createFrame();
        frame_1.resize(393, 852);
        frame_1.x = figma.viewport.center.x - 150;
        frame_1.y = figma.viewport.center.y - 150;
        console.log("Checking condition:", msg.dropdown === 'typography', typographyShapes.includes(msg.shape));
        if (msg.dropdown === 'typography' && typographyShapes.includes(msg.shape)) {
            if (msg.shape === 'circle') {
                // Create light gray background rectangle
                var backgroundRect = figma.createRectangle();
                backgroundRect.resize(393, 852);
                backgroundRect.fills = [{ type: 'SOLID', color: { r: 223 / 255, g: 223 / 255, b: 223 / 255 } }]; // #DFDFDF
                backgroundRect.x = 0;
                backgroundRect.y = 0;
                frame_1.appendChild(backgroundRect);
                // Create darker rectangle at bottom - positioned under the text
                var bottomRect = figma.createRectangle();
                bottomRect.resize(352, 507);
                bottomRect.fills = [{ type: 'SOLID', color: { r: 68 / 255, g: 68 / 255, b: 68 / 255 } }]; // #444444
                bottomRect.x = 20; // Centered in frame
                bottomRect.y = 20;
                frame_1.appendChild(bottomRect);
                figma.loadFontAsync({ family: "Arial", style: "Regular" }).then(function () {
                    // Week title
                    var weekTitle = figma.createText();
                    weekTitle.fontName = { family: "Arial", style: "Regular" };
                    weekTitle.characters = "Week 2";
                    weekTitle.fontSize = 20;
                    weekTitle.x = 25;
                    weekTitle.y = 25;
                    frame_1.appendChild(weekTitle);
                    // Tuesday section
                    var tuesdayTitle = figma.createText();
                    tuesdayTitle.fontName = { family: "Arial", style: "Regular" };
                    tuesdayTitle.characters = "Tuesday";
                    tuesdayTitle.fontSize = 16;
                    tuesdayTitle.x = 25;
                    tuesdayTitle.y = 60;
                    frame_1.appendChild(tuesdayTitle);
                    var tuesdayItems = ["Make Rabbit Stew", "Buy Picnic Blanket"];
                    tuesdayItems.forEach(function (item, index) {
                        var itemText = figma.createText();
                        itemText.fontName = { family: "Arial", style: "Regular" };
                        itemText.characters = "• " + item;
                        itemText.fontSize = 16;
                        itemText.x = 40;
                        itemText.y = 90 + (index * 25);
                        frame_1.appendChild(itemText);
                    });
                    // Wednesday section
                    var wednesdayTitle = figma.createText();
                    wednesdayTitle.fontName = { family: "Arial", style: "Regular" };
                    wednesdayTitle.characters = "Wednesday";
                    wednesdayTitle.fontSize = 16;
                    wednesdayTitle.x = 25;
                    wednesdayTitle.y = 150;
                    frame_1.appendChild(wednesdayTitle);
                    var wednesdayItems = ["Buy Shovel", "Find Hat", "Use Watering Can"];
                    wednesdayItems.forEach(function (item, index) {
                        var itemText = figma.createText();
                        itemText.fontName = { family: "Arial", style: "Regular" };
                        itemText.characters = "• " + item;
                        itemText.fontSize = 16;
                        itemText.x = 40;
                        itemText.y = 185 + (index * 25);
                        frame_1.appendChild(itemText);
                    });
                });
            }
            else if (msg.shape === 'star') {
                var createButton = function (text, yPosition) {
                    var rect = figma.createRectangle();
                    rect.resize(200, 50);
                    rect.cornerRadius = 25;
                    rect.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
                    rect.y = yPosition;
                    rect.x = 50;
                    figma.loadFontAsync({ family: "Arial", style: "Regular" }).then(function () {
                        var textNode = figma.createText();
                        textNode.fontName = { family: "Arial", style: "Regular" };
                        textNode.characters = text;
                        textNode.fontSize = 20;
                        textNode.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
                        textNode.x = 100;
                        textNode.y = yPosition + 15;
                        frame_1.appendChild(rect);
                        frame_1.appendChild(textNode);
                    });
                };
                createButton('Copy', 25);
                createButton('Paste', 100);
                createButton('Repeat', 175);
            }
            else if (msg.shape === 'triangle') {
                var star = figma.createStar();
                star.resize(50, 50);
                star.fills = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
                star.x = 200;
                star.y = 50;
                frame_1.appendChild(star);
                var circle = figma.createEllipse();
                circle.resize(50, 50);
                circle.fills = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
                circle.x = 250;
                circle.y = 150;
                frame_1.appendChild(circle);
                figma.loadFontAsync({ family: "Arial", style: "Regular" }).then(function () {
                    var titleText = figma.createText();
                    titleText.fontName = { family: "Arial", style: "Regular" };
                    titleText.characters = "TODAY AND TODAY ONLY";
                    titleText.fontSize = 16;
                    titleText.x = 25;
                    titleText.y = 150;
                    frame_1.appendChild(titleText);
                    var bodyText = figma.createText();
                    bodyText.fontName = { family: "Arial", style: "Regular" };
                    bodyText.characters = "a festive meal eaten on Friday night by Jewish families and friends to mark the start of the Jewish Sabbath";
                    bodyText.fontSize = 12;
                    bodyText.x = 25;
                    bodyText.y = 180;
                    frame_1.appendChild(bodyText);
                });
            }
        }
        if (msg.dropdown === 'hierarchy' && hierarchyShapes.includes(msg.shape)) {
            if (msg.shape === 'square') {
                var square = figma.createRectangle();
                square.resize(100, 100);
                square.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
                square.x = 100;
                square.y = 100;
                frame_1.appendChild(square);
            }
            else if (msg.shape === 'heart') {
                var heart = figma.createPolygon();
                heart.pointCount = 5; // Adjust to create a heart-like shape
                heart.resize(100, 100);
                heart.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
                heart.x = 100;
                heart.y = 100;
                frame_1.appendChild(heart);
            }
            else if (msg.shape === 'hexagon') {
                var hexagon = figma.createPolygon();
                hexagon.pointCount = 6;
                hexagon.resize(100, 100);
                hexagon.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 1 } }];
                hexagon.x = 100;
                hexagon.y = 100;
                frame_1.appendChild(hexagon);
            }
        }
        figma.currentPage.appendChild(frame_1);
        figma.viewport.scrollAndZoomIntoView([frame_1]);
    }
};
