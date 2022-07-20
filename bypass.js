/**
 * A simple bypass node demo.
 *
 * @class BypassProcessor
 * @extends AudioWorkletProcessor
 */
class BypassProcessor extends AudioWorkletProcessor {

    // When constructor() undefined, the default constructor will be
    // implicitly used.

    process(inputs, outputs) {
        // By default, the node has single input and output.
        const input = inputs[0];
        const output = outputs[0];
        if (input.length > 0) {
            // console.log("inside process");
            for (let channel = 0; channel < output.length; ++channel) {
                output[channel].set(input[channel]);
            }
        } else {
            // console.log("skip process");
        }

        return true;
    }
}

registerProcessor('bypass-processor', BypassProcessor);
