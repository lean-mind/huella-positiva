package com.huellapositiva.application.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@Builder
@AllArgsConstructor
public class UpdateESALDto {

    @Schema(
            description = "Name of ESAL",
            example = "Canarias para todos"
    )
    @NotBlank
    @Pattern(regexp = "^[a-zA-Z ]+$")
    private final String name;

    @Schema(
            description = "ESAL's description",
            example = "ESAL dedicada a ayudar en la recogida de alimentos."

    )
    @Size(max = 500)
    private final String description;

    @Schema(
            description = "ESAL's website",
            example = "https://www.foo-bar.com/"
    )
    @NotEmpty
    @Size(max = 255)
    private final String website;

    @Schema(
            description = "Whether the ESAL is registered as an Volunteering Entity by Gobierno de Canarias",
            example = "true"
    )
    private final boolean registeredEntity;

    @Schema(
            description = "Entity type of the ESAL",
            example = "ASSOCIATION"
    )
    @NotBlank
    private final String entityType;

    @Schema(
            description = "Where the ESAL is located. TIP: Only can be the eight islands of Canary Islands",
            example = "Gran Canaria"
    )
    @NotBlank
    @Pattern(regexp = "^[a-zA-Z ]*$")
    private final String island;

    @Schema(
            description = "Where the ESAL is located. TIP: Can be +35xxx or 38xxx",
            example = "35241"
    )
    @NotBlank
    @Pattern(regexp = "^\\d{5}$")
    private final String zipCode;

    @Schema(
            description = "Where the ESAL is located",
            example = "Las Palmas"
    )
    @Pattern(regexp = "^(Las Palmas|Santa Cruz de Tenerife)$")
    private final String province;

    @Schema(
            description = "Where the ESAL is located",
            example = "Agaete"
    )
    @Pattern(regexp = "^[a-zA-Z ]*$")
    private final String town;

    @Schema(
            description = "Where the ESAL is located",
            example = "Calle Guacimeta N2"
    )
    private final String address;
}
